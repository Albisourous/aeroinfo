from flask_sqlalchemy import SQLAlchemy
from models import app, db, Flight
import requests
import json
import pprint

access_key = "51959b210e2096498ed47e02b6ba7a79"
def get_all_flgihts():
    city_dict = dict()
    url = "http://api.aviationstack.com/v1/flights?limit=30&access_key=51959b210e2096498ed47e02b6ba7a79"
    response = requests.get(url).json().get("data")
    for flight in response:
        print(flight["departure"]["airport"])
    

get_all_flgihts()