console.log('Iniciando la solicitud HTTP...');
const inputData = {
    model_path: "Backend\\venv\\models\\estud_classifier_model_tree.pkl",
    input_values: [10, 2, 2, 2, 1, 2004, 1, 4, 5, 15.33333333, 1.927930212, 696, 684, 728, 646, 727]
};

try {
    const response = await fetch('http://127.0.0.1:8080/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Establecer el tipo de contenido JSON
        },
        body: JSON.stringify(inputData) // Convertir los datos a formato JSON
    });

    console.log('Respuesta recibida del servidor:', response);

    if (!response.ok) {
        console.error('Error en la solicitud HTTP');
        throw new Error('Error en la solicitud HTTP');
    }

    // Obtener y procesar la respuesta JSON
    const resultadoPrediccion = await response.json();
    console.log('Resultado de la predicción:', resultadoPrediccion);
} catch (error) {
    console.error('Error:', error);
    // Manejar los errores aquí
}
