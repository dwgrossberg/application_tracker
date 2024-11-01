import json
from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from pymongo_db import PyMongo_DB
from flask_apscheduler import APScheduler
import requests


class Config:
    SCHEDULER_API_ENABLED = True


app = Flask(__name__, static_folder='frontend/build', static_url_path='')
app.config.from_object(Config())


scheduler = APScheduler()


# Schedule updates to mongodb
@scheduler.task('interval', id='update-listings', seconds=120,
                misfire_grace_time=900)
def update_db():
    internships = requests.get('https://application-scraper-4f768c7eaca5.herokuapp.com/internships').content
    db = PyMongo_DB()
    db.insert_docs(json.loads(internships)[0][9:])


scheduler.start()

CORS(app)


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
