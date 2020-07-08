import requests
import pprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import Flask
from marshmallow import fields
import json
import sys
from sqlalchemy import create_engine
from flask_cors import CORS, cross_origin
import random
import os

application = app = Flask(__name__)
application.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
application.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_STRING", 'postgres://postgres:78731@localhost:5432/bookdb')
db = SQLAlchemy(application)
ma = Marshmallow(application)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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
    city_iata_code = fields.Str(required = False)
    
class AirplaneSchema(ma.Schema):
    airplane_id = fields.Int(required = True)
    registration_number = fields.Str(required = False)
    production_line = fields.Str(required = False)
    iata_type = fields.Str(required = False)
    model_name = fields.Str(required = False)
    model_code = fields.Str(required = False)
    icao_code_hex = fields.Str(required = False)
    first_flight_date = fields.Str(required = False)
    delivery_date = fields.Str(required = False)
    plane_owner = fields.Str(required = False)
    engines_type = fields.Str(required = False)
    plane_age = fields.Str(required = False)
    plane_status = fields.Str(required = False)
    
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
    flgith_icao = fields.Str(required = False)

airport_schema = AirportSchema(many = True)
airplane_schema = AirplaneSchema(many = True)
flight_schema = FlightSchema(many = True)
    
db.drop_all()
db.create_all()
 