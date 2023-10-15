import openai
from rich import print
from rich.table import Table
import config
from mongo_setup import insert_document

class TweetGenerator:
    def __init__(self, api_key):
        self.api_key = api_key
        self.context_data = self._extract_data_from_config()
        openai.api_key = self.api_key

    def _extract_data_from_config(self):
        return {key: value for key, value in config.__dict__.items() if not key.startswith("__") and key != "api_keys" and isinstance(value, dict)}

    def _craft_creative_prompt(self):
        all_data = ". ".join([f"{key.capitalize()}: {value}" for inner_dict in self.context_data.values() for key, value in inner_dict.items()])
        chatgpt_prompt = f"Inspired by: '{all_data}', craft a tweet and take creative freedom."
        return chatgpt_prompt

    def generate_tweets(self, num=1):
        tweet_prompt = self._craft_creative_prompt()
        response = openai.Completion.create(engine="text-davinci-003", prompt=tweet_prompt, max_tokens=150 * num, n=num)
        return [choice.text.strip() for choice in response.choices], tweet_prompt

    def post_tweet_data(self, tweets, tweet_prompt):
        for tweet in tweets:
            insert_document(collection_name='persona_collection', item_input=self.context_data['persona'], tweet=tweet)
            insert_document(collection_name='prompt_collection', item_input=tweet_prompt, tweet=tweet)
            insert_document(collection_name='context_collection', item_input=self.context_data['context'], tweet=tweet)

def display_tweets(tweets, tweet_prompt):
    table = Table(title="Generated Tweets")
    table.add_column("No.", justify="right", style="cyan")
    table.add_column("Tweet", style="magenta")
    for index, tweet in enumerate(tweets, 1):
        table.add_row(str(index), tweet)
    print(table)

# Using the TweetGenerator class
tweet_gen = TweetGenerator(api_key=config.api_keys['openai_api_key'])
tweets, tweet_prompt = tweet_gen.generate_tweets(1)
tweet_gen.post_tweet_data(tweets, tweet_prompt)  # Posting tweets to the database
display_tweets(tweets, tweet_prompt)
