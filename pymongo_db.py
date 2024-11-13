import os
from os.path import join, dirname
from dotenv import load_dotenv
from pymongo import MongoClient
from datetime import datetime


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


class PyMongo_DB:
    def __init__(self):
        self.CONNECTION_STRING = os.environ.get("MONGODB_URI")

    def get_database(self):
        client = MongoClient(self.CONNECTION_STRING)
        return client['applications-internships']

    def insert_docs(self, internships):
        db = self.get_database()
        collection = db["internships-2025"]
        collection.create_index([("company", 1), ("position", 1), ("link", 1),
                                 ("location", 1)], unique=True)
        for internship in internships:
            data = {
                "company": internship[0],
                "position": internship[1],
                "link": internship[2],
                "location": internship[3],
                "date-posted":
                    datetime.strptime(internship[4], '%b %d').
                    strftime('%m %d'),
                "applied": False,
                "online-assessment": False,
                "date-applied": None,
                "interview-round": None,
                "phone-screen": False,
                "referral": False,
                "result": None,
                "remove": False
            }
            if collection.count_documents({
                "company": internship[0],
                "position": internship[1],
                "link": internship[2],
                "location": internship[3]
            }):
                continue
            else:
                collection.insert_one(data)
