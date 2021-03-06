import requests
import pprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import Flask
from marshmallow import fields
import json
import sys
from sqlalchemy import create_engine, ForeignKey
from flask_cors import CORS, cross_origin
from sqlalchemy.ext.declarative import declarative_base
import os
from flask import jsonify
from flask import jsonify
from random import seed
from random import random
from sqlalchemy.orm.exc import MultipleResultsFound

from flask_cors import CORS, cross_origin


application = app = Flask(__name__)
application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
application.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_STRING", 'postgres://postgres:78731@localhost:5432/bookdb')
db = SQLAlchemy(application)
ma = Marshmallow(application)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

link = db.Table('link',
    db.Column('flight_id', db.Integer, db.ForeignKey('Flight.flight_id')), 
    db.Column('airport_id', db.Integer, db.ForeignKey('Airport.airport_id'))
)    


class Flight(db.Model):
    __tablename__ = 'Flight'
    
    airports = db.relationship('Airport', secondary = 'link', back_populates = 'flights')
    flight_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    flight_date = db.Column(db.Text)
    flight_status = db.Column(db.Text)
    departure_airport = db.Column(db.Text)
    departure_timezone = db.Column(db.Text)
    departure_scheduled = db.Column(db.Text)
    departure_estimated = db.Column(db.Text)
    arrival_airport = db.Column(db.Text)
    arrival_timezone = db.Column(db.Text)
    arrival_scheduled = db.Column(db.Text)
    arrival_estimated = db.Column(db.Text)
    airline_id = db.Column(db.Integer, db.ForeignKey('Airline.airline_id'))
    flight_number = db.Column(db.Text)
    flight_iata = db.Column(db.Text)
    flight_icao = db.Column(db.Text)
    
    
class Airline(db.Model):
    __tablename__ = 'Airline'
    
    
    airline_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    flights = db.relationship('Flight', backref = 'airline', lazy = True)
    fleet_average_age = db.Column(db.Text)
    callsign = db.Column(db.Text)
    hub_code = db.Column(db.Text)
    image_url = db.Column(db.Text)
    iata_code = db.Column(db.Text)
    icao_code = db.Column(db.Text)
    country_iso2 = db.Column(db.Text)
    date_founded = db.Column(db.Text)
    iata_prefix_accounting = db.Column(db.Text)
    airline_name = db.Column(db.Text)
    country_name = db.Column(db.Text)
    fleet_size = db.Column(db.Text)    

    
class Airport(db.Model):
    __tablename__ = 'Airport'
    flights = db.relationship('Flight', secondary = 'link', back_populates = 'airports')
    airport_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    gmt = db.Column(db.Text)
    airport_name = db.Column(db.Text)
    iata_code = db.Column(db.Text)
    icao_code = db.Column(db.Text)
    latitude = db.Column(db.Text)
    longitude = db.Column(db.Text)
    timezone = db.Column(db.Text)
    country_name = db.Column(db.Text)
    country_iso2 = db.Column(db.Text)
    city_iata_code = db.Column(db.Text)
    country_image_url = db.Column(db.Text)
    image_url = db.Column(db.Text)
    
    
class AirportSchema(ma.Schema):
    airport_id = fields.Int(required = True)
    gmt = fields.Str(required = False)
    airport_name = fields.Str(required = False)
    iata_code = fields.Str(required = False)
    icao_code = fields.Str(required = False)
    latitude = fields.Str(required = False)
    longitude = fields.Str(required = False)
    timezone = fields.Str(required = False)
    country_name = fields.Str(required = False)
    country_iso2 = fields.Str(required = False)
    country_image_url = fields.URL(required = False)
    image_url = fields.URL(required = False)
    

class OneAirportSchema(AirportSchema):
    city_iata_code = fields.Str(required = False)
    flights = fields.List(fields.Nested(lambda: FlightSchema(only = ('flight_id', 'flight_date', 'flight_iata'))))
    
class AirlineSchema(ma.Schema):
    airline_id = fields.Int(required = True)
    image_url = fields.URL(required = False)
    fleet_average_age = fields.Str(required = False)
    callsign = fields.Str(required = False)
    hub_code = fields.Str(required = False)
    iata_code = fields.Str(required = False)
    icao_code = fields.Str(required = False)
    country_iso2 = fields.Str(required = False)
    date_founded = fields.Str(required = False)
    iata_prefix_accounting = fields.Str(required = False)
    airline_name = fields.Str(required = False)
    country_name = fields.Str(required = False)
    

class OneAirlineSchema(AirlineSchema):    
    fleet_size = fields.Str(required = False)
    flights = fields.List(fields.Nested(lambda: FlightSchema(only = ('flight_id', 'flight_date', 'flight_iata'))))
    
class FlightSchema(ma.Schema):    
    flight_id = fields.Int(required = True)  
    flight_date = fields.Str(required = False)
    flight_status = fields.Str(required = False)
    departure_airport = fields.Str(required = False)
    departure_timezone = fields.Str(required = False)
    departure_scheduled = fields.Str(required = False)
    departure_estimated = fields.Str(required = False)
    arrival_airport = fields.Str(required = False)
    arrival_timezone = fields.Str(required = False)
    arrival_scheduled = fields.Str(required = False)
    arrival_estimated = fields.Str(required = False)
    airline = fields.Str(required = False)
    flight_number = fields.Str(required = False)
    flight_iata = fields.Str(required = False)
    

class OneFlightSchema(FlightSchema):
    flight_icao = fields.Str(required = False)
    airline = fields.Nested(AirlineSchema(only = ('airline_id', 'airline_name', 'image_url', 'iata_code')))
    airports = fields.List(fields.Nested(AirportSchema(only = ('airport_id', 'airport_name', 'iata_code'))))

airport_schema = AirportSchema(many = True)
one_airport_schema = OneAirportSchema()
airline_schema = AirlineSchema(many = True)
one_airline_schema = OneAirlineSchema()
flight_schema = FlightSchema(many = True)
one_flight_schema =  OneFlightSchema()
    
db.drop_all()
db.create_all()

parameter = {}
parameter["access_key"] = "c74b860898525dcbf32c3f3afc600948"
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
get_all_airports(get_url())


parameter["limit"] = 1887
target = "airlines?"

def get_all_airlines(url):
    response = requests.get(url + 'status=active').json().get("data")
    for airline in response:        
        try:
            if(not db.session.query(Airline).filter_by(airline_name = airline["airline_name"]).scalar()):
                image_url = get_image(airline["iata_code"])
                db.session.add(
                    Airline(
                        fleet_average_age = airline["fleet_average_age"],
                        callsign = airline["callsign"],
                        hub_code = airline["hub_code"],
                        iata_code = airline["iata_code"],
                        icao_code = airline["icao_code"],
                        country_iso2 = airline["country_iso2"],
                        image_url = image_url,
                        date_founded = airline["date_founded"],
                        iata_prefix_accounting = airline["iata_prefix_accounting"],
                        airline_name = airline["airline_name"],
                        country_name = airline["country_name"],
                        fleet_size = airline["fleet_size"],
                    )
                )
                db.session.commit()
        except MultipleResultsFound:
            pass

def get_image(code):
    return "https://content.airhex.com/content/logos/airlines_" + str(code) +"_350_100_r.png"
    
get_all_airlines(get_url())


parameter["limit"] = 100
parameter["offset"] = 0 
target = "flights?"

def get_all_flights(url):
    response = requests.get(url).json().get("data")
    for flight in response:
        if(not db.session.query(Flight).filter_by(flight_iata = flight["flight"]["iata"]).scalar()):
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

for i in range(0, 1):
#    parameter["offset"] = i * parameter["limit"]
    get_all_flights(get_url())
    

