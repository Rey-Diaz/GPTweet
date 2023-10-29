from pymongo import MongoClient

CONNECTION_STRING = "mongodb+srv://gptweet:Ramroad7924!@cluster0.ucmu4hc.mongodb.net/"
client = MongoClient(CONNECTION_STRING)

db = client['Cluster0']
persona_collection = db['persona_collection']
context_collection = db['context_collection']
prompt_collection = db['prompt_collection']

for document in prompt_collection.find():
    #breakdown the document into its parts
    tweet = document['tweet']
    prompt = document['prompt']
    print(prompt)
    print(tweet)