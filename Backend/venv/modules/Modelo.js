import axios from 'axios';

class Modelo {
    constructor(dir) {
        this.inputData = {
            model_path: dir,
            input_values: []
        };
    }

    async predecir(valores) {
        try {
            // Asignar los valores de entrada al objeto inputData
            this.inputData.input_values = valores;

            // Realizar la solicitud HTTP POST y esperar la respuesta
            const response = await axios.post('http://127.0.0.1:8080/predict', this.inputData, {
                headers: {
                    'Content-Type': 'application/json' // Establecer el tipo de contenido JSON
                }
            });

            // Obtener y retornar el resultado de la predicción
            const resultadoPrediccion = response.data.prediction;
            return resultadoPrediccion;
        } catch (error) {
            console.error('Error:', error);
            // Manejar los errores aquí
            throw error;
        }
    }
}

export { Modelo };
