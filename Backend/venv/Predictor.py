# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

import os
import pickle

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Obtener los datos de entrada desde JavaScript
        app.logger.info('Received POST request to /predict')

        input_data = request.json
        model_path = input_data.get('model_path')
        input_values = input_data.get('input_values')
        print("-----------------------")
        print("Directorio de trabajo actual:", os.getcwd())
        print("Model Path:", model_path)
        print("Input Values:", input_values)
        print("-----------------------")

        # Cargar el modelo PKL
        with open(model_path, 'rb') as model_file:
            model = pickle.load(model_file)

        # Normalizar los valores de entrada
        scaler = StandardScaler()
        input_values_normalized = scaler.fit_transform([input_values])

        # Realizar la predicción utilizando el modelo
        prediction = model.predict(input_values_normalized)

        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        app.logger.error('Error: %s', str(e))
        return jsonify({'error': str(e)})




if __name__ == "__main__":
    app.run(debug=True, port=8080)


