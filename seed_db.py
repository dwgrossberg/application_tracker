from pymongo_db import PyMongo_DB
import json
import requests


def update_db():
    url = 'https://application-scraper-4f768c7eaca5.herokuapp.com/internships'
    internships = requests.get(url).content
    db = PyMongo_DB()
    db.insert_docs(json.loads(internships)[0][1:])


if __name__ == '__main__':
    update_db()
