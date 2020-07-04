import requests
import pprint
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import json
import sys
from sqlalchemy import create_engine
import random
import os

application = app = Flask(__name__)
application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
application.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_STRING", 'postgres://postgres:78731@localhost:5432/bookdb')
db = SQLAlchemy(application)

class Flight(db.Model):
    __tablename__ = 'Flight'
    
    flight_id = db.Column(db.Integer, primary_key=True, autoincrement = True)
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
    airline = db.Column(db.Text)
    flight_number = db.Column(db.Text)
    flight_iata = db.Column(db.Text)
    flgith_icao = db.Column(db.Text)
    
class Airplane(db.Model):
    __tablename__ = 'Airplane'
    airplane_id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    registration_number = db.Column(db.Text)
    production_line = db.Column(db.Text)
    iata_type = db.Column(db.Text)
    model_name = db.Column(db.Text)
    model_code = db.Column(db.Text)
    icao_code_hex = db.Column(db.Text)
    first_flight_date = db.Column(db.Text)
    delivery_date = db.Column(db.Text)
    plane_owner = db.Column(db.Text)
    engines_type = db.Column(db.Text)
    plane_age = db.Column(db.Text)
    plane_status = db.Column(db.Text)
    
class Airport(db.Model):
    __tablename__ = 'Airport'
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
    
    
db.drop_all()
db.create_all()
 