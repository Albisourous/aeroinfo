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
import random
import os
from flask import jsonify
from models import app, db, Airplane, Airport, Flight
from flightsapi import get_all_flights
from airportsapi import get_all_airports
from airplanesapi import get_all_airplanes

@app.route('/')
def index():
	return 'hello'

@app.route('/airport')    
def airport():
    airport_list = db.session.query(Airport).all()
    l = list()
    for i in airport_list:
        l.append(i.airport_name)
    return jsonify(l)
    
    
if __name__ == "__main__":
	app.run(host='127.0.0.1', port=8080)


