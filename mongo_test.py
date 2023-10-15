from pymongo import MongoClient

# Replace with your MongoDB Atlas connection string
CONNECTION_STRING = "mongodb+srv://gptweet:Ramroad7924!@cluster0.ucmu4hc.mongodb.net/"
# Initialize the client and connect to the database
client = MongoClient(CONNECTION_STRING)
db = client['Cluster0']  # Replace 'your-database-name' with your database name

# create function to insert document into the collection
def insert_document(prompt, response):
    
    # Create a new collection (if it doesn't exist)
    collection_name = "prompt_response_test_collections"  # Replace with your collection name
    if collection_name not in db.list_collection_names():
        db.create_collection(collection_name)

    # Use the collection
    collection = db[collection_name]
    
    doc = {
        "prompt": prompt,
        "response": response
    }
    collection.insert_one(doc)
    print("Document inserted!")
    
    # Close the connection
    client.close()
    
    