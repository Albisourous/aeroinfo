import logging

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('place html file here.html')

@app.route('/aircrafts')
def aircrafts():
    return render_template('place aircraft html file here')

@app.route('/airplanes')
def airplanes():
    return render_template('html file')

@app.route('/airports')
def airports():
    return render_template('html file')

if __name__ == "__main__":
    # might pass host = url_address in app.run. like app.run(host = 'url_address')
    app.run()