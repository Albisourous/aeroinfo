from flask_sqlalchemy import SQLAlchemy
from models import app, db, Flight
import requests
import json
import pprint

access_key = "51959b210e2096498ed47e02b6ba7a79"
def get_all_flights():
    url = "http://api.aviationstack.com/v1/flights?limit=30&access_key=51959b210e2096498ed47e02b6ba7a79"
    response = requests.get(url).json().get("data")
    for flight in response:
        db.session.add(
            Flight(
                flight_date = flight["flight_date"],
                flight_status = flight["flight_status"],
                departure_airport = flight["departure"]["airport"],
                departure_timezone = flight["departure"]["timezone"],
                departure_scheduled = flight["departure"]["scheduled"],
                departure_estimated = flight["departure"]["estimated"],
                arrival_airport = flight["arrival"]["airport"],
                arrival_timezone = flight["arrival"]["timezone"],
                arrival_scheduled = flight["arrival"]["scheduled"],
                arrival_estimated = flight["arrival"]["estimated"],
                airline = flight["airline"]["name"],
                flight_number = flight["flight"]["number"],
                flight_iata = flight["flight"]["iata"],
                flgith_icao = flight["flight"]["icao"],

            )
        )
        db.session.commit()
get_all_flights()
