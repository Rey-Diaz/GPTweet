import openai
import requests

# OpenAI API configuration
openai.api_key = 'API KEY'

def generate_tweet():
    prompt = (""" """)



    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=280  # 280 is the character limit for a tweet
    )
    tweet_content = response.choices[0].text.strip()
    return tweet_content

tweet = generate_tweet()
print(" ")
print(tweet)
print(" ")
# Send tweet content to Zapier webhook for SMS notification
#webhook_url = 'YOUR_ZAPIER_WEBHOOK_URL'
#requests.post(webhook_url, data = {'tweet_content': tweet})
