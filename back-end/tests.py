from flask_sqlalchemy import SQLAlchemy
import json
import unittest
from unittest import main, TestCase
from models import db, Airline, Airport, Flight
import models

class MyUnitTests(unittest.TestCase):
    def test_airline(self):
        american = models.Airline(airline_id = '1', iata_code = 'AA')
        db.session.add(american)
        db.session.commit()
        result = db.session.query(Airline).filter_by(iata_code  = 'AA').one()
        self.assertEqual(str(result.airline_id), '1')
        db.session.commit()

    def test_airline1(self):
        b = models.Airline(airline_id = '2', date_founded  = '00000000')
        db.session.add(b)
        db.session.commit()
        result = db.session.query(Airline).filter_by(date_founded  = '00000000').one()
        self.assertEqual(str(result.airline_id), '2')
        db.session.commit()
        
        
    def test_airline2(self):
        c = models.Airline(airline_id = '3', airline_name = 'test')
        db.session.add(c)
        db.session.commit()
        result = db.session.query(Airline).filter_by(airline_name = 'test').one()
        self.assertEqual(str(result.airline_id), '3')
        db.session.commit()
        
    def test_airport_1(self):
        airport = models.Airport(airport_id = '1', iata_code = "DFW")
        db.session.add(airport)
        db.session.commit()
        result = db.session.query(Airport).filter_by(airport_id = '1').one()
        self.assertEqual(str(result.iata_code), 'DFW')
        db.session.commit()

    def test_airport_2(self):
        airport = models.Airport(airport_id = '2', iata_code = "LAX")
        db.session.add(airport)
        db.session.commit()
        result = db.session.query(Airport).filter_by(airport_id = '2').one()
        self.assertEqual(str(result.iata_code), 'LAX')
        db.session.commit()

    def test_airport_3(self):
        airport = models.Airport(airport_id = '3', iata_code = "ORD")
        db.session.add(airport)
        db.session.commit()
        result = db.session.query(Airport).filter_by(airport_id = '3').one()
        self.assertEqual(str(result.iata_code), 'ORD')
        db.session.commit()    
    
    def test_flight(self):
        a = models.Flight(flight_id = '1', flight_date = 'AA')
        db.session.add(a)
        db.session.commit()
        result = db.session.query(Flight).filter_by(flight_date   = 'AA').one()
        self.assertEqual(str(result.flight_id), '1')
        db.session.commit()

    def test_flight1(self):
        b = models.Flight(flight_id = '2', departure_airport  = '00000000')
        db.session.add(b)
        db.session.commit()
        result = db.session.query(Flight).filter_by(departure_airport  = '00000000').one()
        self.assertEqual(str(result.flight_id), '2')
        db.session.commit()
        
        
    def test_flight2(self):
        c = models.Flight(flight_id = '3', flight_number = 'test')
        db.session.add(c)
        db.session.commit()
        result = db.session.query(Flight).filter_by(flight_number = 'test').one()
        self.assertEqual(str(result.flight_id), '3')
        db.session.commit()
    
    
if __name__ == "__main__":
    unittest.main()