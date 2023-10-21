import openai
from rich import print
from rich.table import Table
from utilities import config
from utilities import mongo_setup
# import insert_document from mongo_setup.py
from utilities.mongo_setup import insert_document

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
    
    def get_tweet_data(self):
        persona_data = {key: value for key, value in config.__dict__.items() if not key.startswith("__") and key != "api_keys" and key != "context"}
        context_data = {key: value for key, value in config.__dict__.items() if not key.startswith("__") and key != "api_keys" and key != "persona"}
        return persona_data, context_data
    
    def post_tweet_data(self, persona_data, context_data, tweet_prompt, tweet):
        insert_document(collection_name='persona_collection',item_input=persona_data, tweet=tweet)
        insert_document(collection_name = 'prompt_collection',item_input=tweet_prompt, tweet=tweet)
        insert_document(collection_name = 'context_collection',item_input=context_data, tweet=tweet)

    def generate_tweets(self, num=1):
        tweet_prompt = self._craft_creative_prompt()
        
        # Fetch num tweets in a single API call
        response = openai.Completion.create(engine="text-davinci-003", prompt=tweet_prompt, max_tokens=150 * num, n=num)    
        persona_description, context_description = self.get_tweet_data()
    
        return [choice.text.strip() for choice in response.choices], tweet_prompt, persona_description, context_description

def display_tweets(tweets, tweet_prompt, persona_description, context_description):
    """Displays tweets in a formatted table using the rich library."""
    table = Table(title="Generated Tweets")
    table.add_column("No.", justify="right", style="cyan")
    table.add_column("Tweet", style="magenta")
    for index, tweet in enumerate(tweets, 3):
        table.add_row(str(index), tweet)
        #post tweet data
        tweet_gen.post_tweet_data(persona_description, context_description, tweet_prompt, tweet)
        
    print(table)

# Using the TweetGenerator class
tweet_gen = TweetGenerator()
tweets, tweet_prompt, persona_description, context_description = tweet_gen.generate_tweets(1)
display_tweets(tweets,tweet_prompt, persona_description, context_description)
