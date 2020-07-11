#!/usr/bin/env python3

# ---------------------------
# projects/IDB3/main.py
# Fares Fraij
# ---------------------------

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

def get_all_flights(url):
    response = requests.get(url).json().get("data")
    for flight in response:
        try:
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
        except MultipleResultsFound:
            pass
            

for i in range(9):
    offset = (str(int(1600*random())*100))
    get_all_flights("http://api.aviationstack.com/v1/flights?limit=100&access_key=825fa4b6e358050087ede9b9b769dc1c&" + "offset=" + offset)

