from pymongo import MongoClient
import os

# Fetching the connection string from environment variables
CONNECTION_STRING = os.environ.get("MONGO_CONNECTION_STRING")

client = MongoClient(CONNECTION_STRING)
db = client['Cluster0']  # Replace 'your-database-name' with your database name

def insert_document(collection_name, item_input, tweet):
    # Check if collection exists, if not, create it
    if collection_name not in db.list_collection_names():
        db.create_collection(collection_name)

    # Use the collection
    collection = db[collection_name]

    # Instead of splitting the collection name, we'll use a more structured approach
    doc = {
        "header": item_input,
        "tweet": tweet
    }
    collection.insert_one(doc)
    print(f"Document inserted in the collection: {collection_name}")
