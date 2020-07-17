
    
def getAirports():
    airports = db.session.query(Airport).all()
    result = airport_schema.dump(airports)
    return jsonify({'airports': result})

def searchAirport(name):
    airports = db.session.query(Airport).filter(or_(func.lower(Airport.airport_name).contains(func.lower(name)),\
                                                    func.lower(Airport.country_name).contains(func.lower(name))))
    result = airport_schema.dump(airports)
    return jsonify({'airports': result})

def searchFlight(name):
    flights = db.session.query(Flight).\
                         join(Flight.airports).\
                         filter(or_(func.lower(Airport.airport_name).contains(func.lower(name)), \
                                    func.lower(Flight.flight_iata).contains(func.lower(name))))
    result = flight_schema.dump(flights)
    return jsonify({'flights': result})

def searchAirline(name):
    airlines = db.session.query(Airline).filter(or_(func.lower(Airline.airline_name).contains(func.lower(name)),\
                                                    func.lower(Airline.country_name).contains(func.lower(name))))
    result = airline_schema.dump(airlines)
    return jsonify({'airlines': result})

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


