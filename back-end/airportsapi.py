from flask_sqlalchemy import SQLAlchemy
from models import app, db, Airport
import requests
import json
import pprint

access_key = "51959b210e2096498ed47e02b6ba7a79"
def get_all_airports():
    url = "http://api.aviationstack.com/v1/airports?limit=30&access_key=51959b210e2096498ed47e02b6ba7a79"
    response = requests.get(url).json().get("data")
    for airport in response:
        db.session.add(
            Airport(
                gmt = airport["gmt"],
                airport_name = airport["airport_name"],
                iata_code = airport["iata_code"],
                icao_code = airport["icao_code"],
                latitude = airport["latitude"],
                longitude = airport["longitude"],
                timezone = airport["timezone"],
                country_name = airport["country_name"],
                country_iso2 = airport["country_iso2"],
                city_iata_code = airport["city_iata_code"],

            )
        )
        db.session.commit()
get_all_airports()
