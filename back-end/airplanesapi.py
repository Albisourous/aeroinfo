from flask_sqlalchemy import SQLAlchemy
from models import app, db, Airplane
import requests
import json
import pprint

access_key = "51959b210e2096498ed47e02b6ba7a79"
def get_all_airplanes():
    url = "http://api.aviationstack.com/v1/airplanes?limit=30&access_key=51959b210e2096498ed47e02b6ba7a79"
    response = requests.get(url).json().get("data")
    for airplane in response:
        db.session.add(
            Airplane(
                registration_number = airplane["registration_number"],
                production_line = airplane["production_line"],
                iata_type = airplane["iata_type"],
                model_name = airplane["model_name"],
                model_code = airplane["model_code"],
                icao_code_hex = airplane["icao_code_hex"],
                first_flight_date = airplane["first_flight_date"],
                delivery_date = airplane["delivery_date"],
                plane_owner = airplane["plane_owner"],
                engines_type = airplane["engines_type"],
                plane_age = airplane["plane_age"],
                plane_status = airplane["plane_status"],

            )
        )
        db.session.commit()
get_all_airplanes()
