import openai
from rich import print
from rich.table import Table
import config
# import insert_document from mongo_setup.py
from mongo_setup import insert_document

class TweetGenerator:
    """
    A class to generate tweets using the OpenAI API based on data provided in the config file.
    """

    def __init__(self):
        self.api_key = config.api_keys['openai_api_key']
        # Exclude the api_keys dictionary and get the rest of the data from config
        self.context_data = {key: value for key, value in config.__dict__.items() if not key.startswith("__") and key != "api_keys"}
        openai.api_key = self.api_key

    def _craft_creative_prompt(self):
        # Use all the context data to craft the prompt
        all_data = ". ".join([f"{key.capitalize()}: {value}" for inner_dict in self.context_data.values() for key, value in inner_dict.items()])
        chatgpt_prompt = f"Inspired by: '{all_data}', craft a tweet and take creative freedom."
        return chatgpt_prompt

    def generate_tweets(self, num=1):
        tweet_prompt, persona_description = self._craft_creative_prompt()
        
        # Fetch num tweets in a single API call
        response = openai.Completion.create(engine="text-davinci-003", prompt=tweet_prompt, max_tokens=150 * num, n=num)
        
        return [choice.text.strip() for choice in response.choices], tweet_prompt, persona_description

def insert_persona(collection_name,item_input,tweet):
    insert_document(collection_name, item_input, tweet)

def insert_prompt(collection_name,item_input,tweet):
    insert_document(collection_name, item_input, tweet)

def display_tweets(tweets, tweet_prompt, persona_description):
    """Displays tweets in a formatted table using the rich library."""
    table = Table(title="Generated Tweets")
    table.add_column("No.", justify="right", style="cyan")
    table.add_column("Tweet", style="magenta")
    for index, tweet in enumerate(tweets, 1):
        table.add_row(str(index), tweet)
        insert_persona(collection_name='persona_collection',item_input=persona_description, tweet=tweet)
        insert_prompt(collection_name = 'prompt_collection',item_input=tweet_prompt, tweet=tweet)
    print(table)

# Using the TweetGenerator class
tweet_gen = TweetGenerator()
tweets, tweet_prompt, persona_description = tweet_gen.generate_tweets(1)
display_tweets(tweets,tweet_prompt, persona_description)
