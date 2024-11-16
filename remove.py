from pymongo_db import PyMongo_DB


def script():
    mongo = PyMongo_DB()
    db = mongo.get_database()
    collection = db["internships-2025"]
    collection.update_many({}, {'$set': {"remove": False}})


if __name__ == "__main__":
    script()