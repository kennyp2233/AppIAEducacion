import { Modelo } from './Modelo.js';
//const inputData = [10, 2, 2, 2, 1, 2004, 1, 4, 5, 15.33333333, 1.927930212, 696, 684, 728, 646, 727];

class Modelos {
    constructor(){}
    
    async predecirKNN(inputData){
        const modeloKNN = 'models\\estud_classifier_model_tree.pkl';
        const predictorKNN = new Modelo(modeloKNN);
        const resultadoKNN = await predictorKNN.predecir(inputData);
        return resultadoKNN;
    }

    async predecirTrees(inputData){
        const modeloTrees = 'models\\estud_classifier_model.pkl';
        const predictorTrees = new Modelo(modeloTrees);
        const resultadoTrees = await predictorTrees.predecir(inputData);
        return resultadoTrees;
    }
}

export { Modelos };



