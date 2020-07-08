.DEFAULT_GOAL :=  backend

backend:
	pip install virtualenv
	virtualenv venv
	pip install
	. venv/Scripts/activate
	pip install flask
	pip install Flask-SQLAlchemy
	pip install flask_cors
	pip install Flask-SQLAlchemy
	pip install flask_marshmallow
	python main.py