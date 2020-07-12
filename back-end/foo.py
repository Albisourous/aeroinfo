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

db.drop_all()
db.create_all()
            

<<<<<<< HEAD
=======

def get_image(code):
    return "https://content.airhex.com/content/logos/airlines_" + str(code) +"_350_100_r.png"
            
            
for i in range(1888, 7656):
    one = db.session.query(Airline).filter_by(airline_id = str(i)).one()
    url = get_image(str(one.iata_code))
    db.session.query(Airline).filter_by(airline_id = str(i)).update({"image_url":url})
    db.session.commit()

>>>>>>> 9b3b0c69c6a90d14ff7e22b46e39b2de78e7d021
