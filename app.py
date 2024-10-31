from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import requests


app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return requests.get('https://application-scraper-4f768c7eaca5.herokuapp.com/internships').content


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
