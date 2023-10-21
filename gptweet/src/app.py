from flask import Flask, jsonify
import sys
from utilities import util
from utilities.main import TweetGenerator, display_tweets  # Import both TweetGenerator and display_tweets
  # Import the TweetGenerator class

app = Flask(__name__)

@app.route('/run-util', methods=['POST'])
def run_util():
    result = util.some_function()  # Call the function you want to run from util.py
    return jsonify({"result": result})

@app.route('/run-main', methods=['POST'])
def run_main():
    tweet_gen = TweetGenerator()
    tweets, tweet_prompt, persona_description, context_description = tweet_gen.generate_tweets(1)
    display_tweets(tweets, tweet_prompt, persona_description, context_description)  # Directly use display_tweets
    return jsonify({"result": "main.py executed successfully"})


if __name__ == '__main__':
    app.run(port=5959)
