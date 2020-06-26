import logging

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Home.js')

@app.route('/airplanes')
def airplanes():
    return render_template('Airplanes.js')

@app.route('/flights')
def flights():
    return render_template('Flights.js')

@app.route('/airports')
def airports():
    return render_template('Airports.js')

if __name__ == "__main__":
    # might pass host = url_address in app.run. like app.run(host = 'url_address')
    app.run()