import openai
import requests
from pymongo import MongoClient
# import insert_document from mongo_test.py
from mongo_test import insert_document

# OpenAI API configuration

def generate_tweet(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=280  # 280 is the character limit for a tweet
    )
    tweet_content = response.choices[0].text.strip()
    return tweet_content

prompt = "How would Mario solve inflation in the Mushroom Kingdom?"
tweet = generate_tweet(prompt)
print(tweet)

# Insert tweet into MongoDB Atlas
# insert_document(collection, prompt, tweet)
insert_document(prompt, tweet)
