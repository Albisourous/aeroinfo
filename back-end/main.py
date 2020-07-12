#!/usr/bin/env python3

# ---------------------------
# projects/IDB3/main.py
# Fares Fraij
# ---------------------------

import requests
import pprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import Flask, render_template
from marshmallow import fields
import json
import sys
from sqlalchemy import create_engine, ForeignKey
from flask_cors import CORS, cross_origin
from sqlalchemy.ext.declarative import declarative_base
import os
from flask import jsonify
from flask import jsonify

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
<<<<<<< HEAD


@app.route('/')
@app.route('/airports')
@app.route('/airlines')
@app.route('/flights')
@app.route('/about')
def serve():
    return render_template("index.html")


@app.route('/airports/')
@cross_origin()
def serve_airports():
    return render_template("index.html")


@app.route('/airlines/')
def serve_airlines():
    return render_template("index.html")


@app.route('/flights/')
def serve_flights():
    return render_template("index.html")
 
=======


>>>>>>> 9b3b0c69c6a90d14ff7e22b46e39b2de78e7d021


@app.route('/api/', methods = ["GET"])
@cross_origin()
def index():
	return 'hello'

@app.route('/api/airports', methods = ["GET"]) 
@cross_origin() 
def airports():
    return getAirports()
 
@app.route('/api/airports/<int:id>', methods = ["GET"]) 
@cross_origin() 
def airport(id):
    return getOneAirport(id)
 
@app.route('/api/airlines/<int:id>', methods = ["GET"])
@cross_origin()  
def airline(id):
    return getOneAirline(id)
 
@app.route('/api/airlines', methods = ["GET"])
@cross_origin()  
def airlines():
    return getAirlines()
    
 
@app.route('/api/flights', methods = ["GET"]) 
@cross_origin()  
def flights():
    return getFlights()
    
@app.route('/api/flights/<int:id>', methods = ["GET"]) 
@cross_origin()  
def flight(id):
    return getOneFlight(id)
    
def getAirports():
    airports = db.session.query(Airport).all()
    result = airport_schema.dump(airports)
    return jsonify({'airports': result})

def getOneAirport(id):
    airport = db.session.query(Airport).filter_by(airport_id = id).first()
    return one_airport_schema.jsonify(airport)


def getOneFlight(id):
    flight = db.session.query(Flight).filter_by(flight_id = id).first()
    return one_flight_schema.jsonify(flight)
  
def getOneAirline(id):
    airline = db.session.query(Airline).filter_by(airline_id = id).first()
    return one_airline_schema.jsonify(airline)
  
def getFlights():
    flights = db.session.query(Flight).all()
    result = flight_schema.dump(flights)
    return jsonify({'flights': result})

def getAirlines():
    airlines = db.session.query(Airline).all()
    result = airline_schema.dump(airlines)
    return jsonify({'airlines': result})
        
    
    
if __name__ == "__main__":
	app.run(host='127.0.0.1', port = 8080)


