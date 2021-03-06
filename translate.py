import os, requests, uuid, json

# Don't forget to replace with your Cog Services subscription key!
# If you prefer to use environment variables, see Extra Credit for more info.
subscription_key = 'd202174795994dcb98dafd85eab7305f'
location = 'southcentralus'
# Don't forget to replace with your Cog Services location!
# Our Flask route will supply two arguments: text_input and language_output.
# When the translate text button is pressed in our Flask app, the Ajax request
# will grab these values from our web app, and use them in the request.
# See main.js for Ajax calls.
def get_translation(text_input, text_input2, text_input3, text_input4, text_input5, text_input6, text_input7, text_input8, text_input9, language_output):
    base_url = 'https://api.cognitive.microsofttranslator.com'
    path = '/translate?api-version=3.0'
    params = '&to=' + language_output
    constructed_url = base_url + path + params

    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    # You can pass more than one object in body.
    body = [{
        'text' : text_input,
    },
    {
        'text': text_input2,
    },
    {
        'text': text_input3,
    },
    {
        'text': text_input4,
    },
    {
        'text': text_input5,
    },
    {
        'text': text_input6,
    },
    {
        'text': text_input7,
    },
    {
        'text': text_input8,
    },
    {
        'text': text_input9,
    }
    ]
    response = requests.post(constructed_url, headers=headers, json=body)
    return response.json()