import openai
from rich import print
from rich.table import Table
import config

class TweetGenerator:
    """
    A class to generate tweets using the OpenAI API based on data provided in the config file.
    """

    def __init__(self):
        self.api_key = getattr(config, 'openai_api_key', None)
        self.context_data = {key: value for key, value in config.__dict__.items() if not key.startswith("__") and key != "openai_api_key"}
        openai.api_key = self.api_key

    def _craft_creative_prompt(self):
        persona_description = ". ".join([f"{key.capitalize()}: {value}" for key, value in config.persona.items()])
        chatgpt_prompt = f"Inspired by the persona: '{persona_description}', craft a tweet and take creative freedom."
        return chatgpt_prompt

    def generate_tweets(self, num=1):
        tweet_prompt = self._craft_creative_prompt()
        
        # Fetch num tweets in a single API call
        response = openai.Completion.create(engine="text-davinci-003", prompt=tweet_prompt, max_tokens=150 * num, n=num)
        
        return [choice.text.strip() for choice in response.choices]

def display_tweets(tweets):
    """Displays tweets in a formatted table using the rich library."""
    table = Table(title="Generated Tweets")
    table.add_column("No.", justify="right", style="cyan")
    table.add_column("Tweet", style="magenta")
    for index, tweet in enumerate(tweets, 1):
        table.add_row(str(index), tweet)
    print(table)

# Using the TweetGenerator class
tweet_gen = TweetGenerator()
tweets = tweet_gen.generate_tweets(5)
display_tweets(tweets)
