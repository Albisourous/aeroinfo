from flask_sqlalchemy import SQLAlchemy
from models import app, db, Airline
import requests
import json
import pprint


parameter = {}
parameter["access_key"] = "6ccda7d42144eee9a93033cd629eb49f"
parameter["limit"] = 13131
base_url = "http://api.aviationstack.com/v1/"
target = "airlines?"

def get_all_airlines(url):
    response = requests.get(url).json().get("data")
    for airline in response:
        image_url = get_image(airline["iata_code"])
        db.session.add(
            Airline(
                fleet_average_age = airline["fleet_average_age"],
                callsign = airline["callsign"],
                hub_code = airline["hub_code"],
                iata_code = airline["iata_code"],
                icao_code = airline["icao_code"],
                image_url = get_image(airline["iata_code"]),
                country_iso2 = airline["country_iso2"],
                date_founded = airline["date_founded"],
                iata_prefix_accounting = airline["iata_prefix_accounting"],
                airline_name = airline["airline_name"],
                country_name = airline["country_name"],
                fleet_size = airline["fleet_size"],
            )
        )
        db.session.commit()

def get_image(code):
    return "https://content.airhex.com/content/logos/airlines_" + str(code) +"_350_100_r.png"
    

def get_url():
    url = base_url + target 
    for key,value in parameter.items():
        url = url + key + "=" + str(value) + "&"
    return url

get_all_airlines(get_url())


