import os, requests, uuid, json

# Don't forget to replace with your Cog Services subscription key!
subscription_key = '7b32de97dfd84c71a7b0861d1e6085cf'
endpoint = "https://sentiment-techcustom.cognitiveservices.azure.com/" 
# Our Flask route will supply four arguments: input_text, input_language,
# output_text, output_language.
# When the run sentiment analysis button is pressed in our Flask app,
# the Ajax request will grab these values from our web app, and use them
# in the request. See main.js for Ajax calls.

def get_sentiment(input_text, input_text2, input_text3):
    path = '/text/analytics/v3.0/sentiment'
    constructed_url = endpoint + path

    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key,
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    # You can pass more than one object in body.
    body = {
        'documents': [
            {
                'id': '1',
                'text': input_text
            },
            {
                'id': '2',
                'text': input_text2
            },
            {
                'id': '3',
                'text': input_text3
            },
        ]
    }
    response = requests.post(constructed_url, headers=headers, json=body)
    return response.json()