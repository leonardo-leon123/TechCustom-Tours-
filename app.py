from flask import Flask, render_template, request, jsonify

import translate, sentiment

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cuestionario')
def cuestionario():
    return render_template('cuestionario.html')

@app.route('/translate-text', methods=['POST'])
def traductor_text():
    data = request.get_json()
    text_input = data['text']
    text_input2 = data['text2']
    text_input3 = data['text3']
    text_input4 = data['text4']
    text_input5 = data['text5']
    text_input6 = data['text6']
    text_input7 = data['text7']
    text_input8 = data['text8']
    text_input9 = data['text9']
    translation_output = data['to']
    response = translate.get_translation(text_input, text_input2, text_input3, text_input4, text_input5, text_input6, text_input7, text_input8, text_input9, translation_output)
    print(response)
    return jsonify(response)

@app.route('/sentiment-analysis', methods=['POST'])
def sentiment_analysis():
    data = request.get_json()
    input_text = data['inputText']
    input_text2 = data['inputText2']
    input_text3 = data['inputText3']
    response = sentiment.get_sentiment(input_text, input_text2, input_text3)
    return jsonify(response)