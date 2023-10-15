from pymongo import MongoClient

# Replace with your MongoDB Atlas connection string
CONNECTION_STRING = "mongodb+srv://gptweet:Ramroad7924!@cluster0.ucmu4hc.mongodb.net/"

# create function to insert document into the collection
def insert_document(collection_name, item_input, tweet):
    
    # Initialize the client and connect to the database
    client = MongoClient(CONNECTION_STRING)
    db = client['Cluster0']  # Replace 'your-database-name' with your database name

    # Create a new collection (if it doesn't exist)
    if collection_name not in db.list_collection_names():
        db.create_collection(collection_name)

    # Use the collection
    collection = db[collection_name]
    parts = collection_name.split("_")
    text_before_underscore = parts[0]
    header = text_before_underscore

    doc = {
        header: item_input,
        "tweet": tweet
    }
    collection.insert_one(doc)
    print("Document inserted in the collection: " + collection_name)
    
    # Close the connection
    client.close()
    
    