#!/usr/bin/env python3

# ---------------------------
# projects/IDB3/main.py
# Fares Fraij
# ---------------------------

import requests
import pprint
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import json
import sys
from sqlalchemy import create_engine
import os
from flask import jsonify
from models import app, db, Airplane, Airport, Flight, airport_schema, flight_schema, airplane_schema
from flightsapi import get_all_flights
from airportsapi import get_all_airports
from airplanesapi import get_all_airplanes
from flask_cors import CORS, cross_origin


@app.route('/api/', methods = ["GET"])
@cross_origin()
def index():
	return 'hello'

@app.route('/api/airports', methods = ["GET"]) 
@cross_origin() 
def airports():
    
    return getAirports()
    
@app.route('/api/airplanes', methods = ["GET"])
@cross_origin()  
def airplanes():

    return getFlights()
    
@app.route('/api/flights', methods = ["GET"]) 
@cross_origin()  
def flights():

    return getAirplanes()
    
def getAirports():
    airports = db.session.query(Airport).all()
    result = airport_schema.dump(airports)
    return jsonify({'airports': result})
        
def getFlights():
    flights = db.session.query(Flight).all()
    result = flight_schema.dump(flights)
    return jsonify({'flights': result})

def getAirplanes():
    airplanes = db.session.query(Airplane).all()
    result = airplane_schema.dump(airplanes)
    return jsonify({'airplanes': result})
        
    
    
if __name__ == "__main__":
	app.run(host='127.0.0.1', port = 8080)


