import { Modelo } from './Modelo.js';

// Ejemplo de uso de la clase ModelPredictor
const modeloKNN = 'Modelos\\estud_classifier_model_tree.pkl';
const modeloTrees = 'Modelos\\estud_classifier_model.pkl';

const predictorKNN = new Modelo(modeloKNN);
const predictorTrees = new Modelo(modeloTrees);

// Datos de entrada para la predicción
const inputData = [10, 2, 2, 2, 1, 2004, 1, 4, 5, 15.33333333, 1.927930212, 696, 684, 728, 646, 727];

// Realiza la predicción
const resultadoKNN = await predictorKNN.predecir(inputData);
const resultadoTrees = await predictorTrees.predecir(inputData);

console.log('Resultado de la predicción KNN:', resultadoKNN);
console.log('Resultado de la predicción Trees:', resultadoTrees);

