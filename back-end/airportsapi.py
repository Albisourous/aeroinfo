from flask_sqlalchemy import SQLAlchemy
from models import app, db, Airport
import requests
import json
import pprint

parameter = {}
parameter["access_key"] = "6ccda7d42144eee9a93033cd629eb49f"
parameter["limit"] = 6471
base_url = "http://api.aviationstack.com/v1/"
target = "airports?"


def get_all_airports(url):
    response = requests.get(url).json().get("data")
    for airport in response:
        db.session.add(
            Airport(
                gmt = airport["gmt"],
                airport_name = airport["airport_name"],
                iata_code = airport["iata_code"],
                icao_code = airport["icao_code"],
                latitude = airport["latitude"],
                country_image_url = get_country_image(airport["country_iso2"]),
                longitude = airport["longitude"],
                timezone = airport["timezone"],
                country_name = airport["country_name"],
                country_iso2 = airport["country_iso2"],
                city_iata_code = airport["city_iata_code"],
            )
        )
        db.session.commit()
        
def get_country_image(code):
    return "https://www.countryflags.io/" + str(code) + "/shiny/64.png"

def get_url():
    url = base_url + target 
    for key,value in parameter.items():
        url = url + key + "=" + str(value) + "&"
    return url


access_key = "8d9a1dbca4msh7618d40d0e98519p1038dfjsn75ec8ee24c28"
host = "aerodatabox.p.rapidapi.com"
url = "https://aerodatabox.p.rapidapi.com/airports/iata/"
headers = {"X-RapidAPI-Key" : access_key, "X-RapidAPI-Host" : host}
wikiapi = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles="

def get_airport_image(iata):
    try:
        response = requests.get(url + iata, headers = headers).json()
        wikiurl = response["urls"]["wikipedia"]
        name = get_name(wikiurl)
        wikiapi_response = requests.get(wikiapi + name).json()
        page_info = wikiapi_response["query"]["pages"]
        for page_id in page_info:
            response = page_info[page_id]
        result = response["original"]["source"]
        return result
    except:
        return "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2020/04/02/USATODAY/usatsports/airport-airplanes-source-getty.jpg"

def get_name(wikiurl):
    for i in reversed(range(len(wikiurl))):
        if wikiurl[i] == '/':
            return wikiurl[i + 1:]
    return "not found"

        
get_all_airports(get_url())
