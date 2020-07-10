from flask_sqlalchemy import SQLAlchemy
from models import app, db, Flight, Airline, Airport
import requests
import json
import pprint

parameter = {}
parameter["access_key"] = "6ccda7d42144eee9a93033cd629eb49f"
parameter["limit"] = 100
parameter["offset"] = 0 
base_url = "http://api.aviationstack.com/v1/"
target = "flights?"

def get_all_flights(url):
    response = requests.get(url).json().get("data")
    for flight in response:
        arrival_airport = flight["arrival"]["airport"]
        departure_airport = flight["departure"]["airport"]
        
        f1 = Flight(
                flight_date = flight["flight_date"],
                flight_status = flight["flight_status"],
                departure_airport = departure_airport,
                departure_timezone = flight["departure"]["timezone"],
                departure_scheduled = flight["departure"]["scheduled"],
                departure_estimated = flight["departure"]["estimated"],
                arrival_airport = arrival_airport,
                arrival_timezone = flight["arrival"]["timezone"],
                arrival_scheduled = flight["arrival"]["scheduled"],
                arrival_estimated = flight["arrival"]["estimated"],
                flight_number = flight["flight"]["number"],
                flight_iata = flight["flight"]["iata"],
                flight_icao = flight["flight"]["icao"],
                airline = db.session.query(Airline).filter_by(airline_name = flight["airline"]["name"]).first(),
        )
        if arrival_airport is not None:
            f1.airports.append(db.session.query(Airport).filter_by(airport_name = flight["arrival"]["airport"]).first())
        if departure_airport is not None:
            f1.airports.append(db.session.query(Airport).filter_by(airport_name = flight["departure"]["airport"]).first())
        db.session.add(f1)
        db.session.commit()

  
def get_url():
    url = base_url + target 
    for key,value in parameter.items():
        url = url + key + "=" + str(value) + "&"
    return url      
 
for i in range(0, 10):
    parameter["offset"] = i * parameter["limit"]
    get_all_flights(get_url())
    
