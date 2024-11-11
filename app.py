import json
from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from pymongo_db import PyMongo_DB
from bson import json_util
from bson.objectid import ObjectId
from flask_apscheduler import APScheduler
import requests


class Config:
    SCHEDULER_API_ENABLED = True


app = Flask(__name__, static_folder='frontend/build', static_url_path='')
app.config.from_object(Config())

mongo = PyMongo_DB()
db = mongo.get_database()
collection = db["internships-2025"]

scheduler = APScheduler()


# Schedule updates to mongodb
@scheduler.task('interval', id='update-listings', seconds=300,
                misfire_grace_time=900)
def update_db():
    url = 'https://application-scraper-4f768c7eaca5.herokuapp.com/internships'
    internships = requests.get(url).content
    mongo.insert_docs(json.loads(internships)[0][1:])


scheduler.start()

CORS(app)


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


# Serve data to frontend
@app.route('/api/internships', methods=['GET'])
@cross_origin()
def get_data():
    data = collection.find()
    return json.loads(json_util.dumps(data))


# Update internship data points
@app.route('/api/internships/update/<_id>', methods=['PUT'])
@cross_origin()
def update_applied(_id):
    try:
        data = request.get_json()
        collection.update_one(
            {'_id': ObjectId(_id)},
            {'$set': data}
            )
        return jsonify({'message': 'Item updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 404


@app.route('/api/internships/update/date_applied/<_id>', methods=['PUT'])
@cross_origin()
def update_date_applied(_id):
    try:
        data = request.get_json()
        collection.update_one(
            {'_id': ObjectId(_id)},
            {'$set': data}
            )
        return jsonify({'message': 'Item updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 404


@app.route('/api/internships/update/referral/<_id>', methods=['PUT'])
@cross_origin()
def update_referral(_id):
    try:
        data = request.get_json()
        collection.update_one(
            {'_id': ObjectId(_id)},
            {'$set': data}
            )
        return jsonify({'message': 'Item updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 404


if __name__ == '__main__':
    app.run()
