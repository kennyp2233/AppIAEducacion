//import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

/*----------------------------------------------------------*/
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
            //const response = await axios.post('http://127.0.0.1:8080/predict', this.inputData, {
            const response = await axios.post('https://kennyp2233.pythonanywhere.com/predict', this.inputData, {
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


class Modelos {
    constructor() { }

    async predecirKNN(inputData) {
        //const modeloKNN = 'Backend\\venv\\models\\estud_classifier_model_tree.pkl';
        const modeloKNN = '/home/kennyp2233/models/estud_classifier_model_tree.pkl';
        const predictorKNN = new Modelo(modeloKNN);
        const resultadoKNN = await predictorKNN.predecir(inputData);
        return resultadoKNN;
    }

    async predecirTrees(inputData) {
        //const modeloTrees = 'Backend\\venv\\models\\estud_classifier_model.pkl';
        const modeloTrees = '/home/kennyp2233/models/estud_classifier_model.pkl';
        const predictorTrees = new Modelo(modeloTrees);
        const resultadoTrees = await predictorTrees.predecir(inputData);
        return resultadoTrees;
    }
}

/*----------------------------------------------------------------------------------*/
let modelos = new Modelos();
let inputData = [];

// Inputs
const gradoInput = document.getElementById('grado');
const nmRegiInput = document.getElementById('nm_regi');
const esRegevaInput = document.getElementById('es_regeva');
const financiamientoInput = document.getElementById('financiamiento');
const tpSexoInput = document.getElementById('tp_sexo');
const naEanoInput = document.getElementById('na_eano');
const tpAreaInput = document.getElementById('tp_area');
const etnibeeInput = document.getElementById('etnibee');
const quintilInput = document.getElementById('quintil');
const facExpInput = document.getElementById('fac_exp');
const isecInput = document.getElementById('isec');
const inevInput = document.getElementById('inev');
const imatInput = document.getElementById('imat');
const ilylInput = document.getElementById('ilyl');
const icnInput = document.getElementById('icn');
const iesInput = document.getElementById('ies');

const predecirBtn = document.getElementById('form_submit');
const formulario = document.getElementById('form');

const dialog = document.getElementById('dialog');
const dialogTitle = document.querySelector('.dialog-title');
const dialogMessage = document.querySelector('.dialog-message');



formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();


});

predecirBtn.addEventListener('click', async function () {

    // Obtener los valores de los campos de entrada
    const gradoValue = gradoInput.value.trim();
    const nmRegiValue = nmRegiInput.value.trim();
    const esRegevaValue = esRegevaInput.value.trim();
    const financiamientoValue = financiamientoInput.value.trim();
    const tpSexoValue = tpSexoInput.value.trim();
    const naEanoValue = naEanoInput.value.trim();
    const tpAreaValue = tpAreaInput.value.trim();
    const etnibeeValue = etnibeeInput.value.trim();
    const quintilValue = quintilInput.value.trim();
    const facExpValue = facExpInput.value.trim();
    const isecValue = isecInput.value.trim();
    const inevValue = inevInput.value.trim();
    const imatValue = imatInput.value.trim();
    const ilylValue = ilylInput.value.trim();
    const icnValue = icnInput.value.trim();
    const iesValue = iesInput.value.trim();

    // Validar que ningún campo esté vacío
    if (
        gradoValue === '' ||
        nmRegiValue === '' ||
        esRegevaValue === '' ||
        financiamientoValue === '' ||
        tpSexoValue === '' ||
        naEanoValue === '' ||
        tpAreaValue === '' ||
        etnibeeValue === '' ||
        quintilValue === '' ||
        facExpValue === '' ||
        isecValue === '' ||
        inevValue === '' ||
        imatValue === '' ||
        ilylValue === '' ||
        icnValue === '' ||
        iesValue === ''
    ) {
        alert('Por favor, complete todos los campos.');
    } else {
        inputData = [
            parseInt(gradoValue),
            parseInt(nmRegiValue),
            parseInt(esRegevaValue),
            parseInt(financiamientoValue),
            parseInt(tpSexoValue),
            parseInt(naEanoValue),
            parseInt(tpAreaValue),
            parseInt(etnibeeValue),
            parseInt(quintilValue),
            parseFloat(facExpValue),
            parseFloat(isecValue),
            parseInt(inevValue),
            parseInt(imatValue),
            parseInt(ilylValue),
            parseInt(icnValue),
            parseInt(iesValue),
        ];

    }

    if (inputData.length === 0) {
        alert('Por favor, complete todos los campos.');
        return; // Detener la ejecución si faltan campos
    }

    dialogMessage.textContent = 'Procesando, por favor espere...';
    dialog.style.display = 'block';

    // Realizar las predicciones de manera asincrónica
    try {
        const resultadoKNN = await modelos.predecirKNN(inputData);
        const resultadoTrees = await modelos.predecirTrees(inputData);

        // Mostrar los resultados en el cuadro de diálogo
        dialogMessage.textContent = `Predicción KNN: ${resultadoKNN}\nPredicción Trees: ${resultadoTrees}`;
    } catch (error) {
        console.error('Error:', error);
        dialogMessage.textContent = 'Ocurrió un error al realizar la predicción.';
    }

    // Ocultar el cuadro de diálogo después de un tiempo (por ejemplo, 3 segundos)
    setTimeout(() => {
        dialog.style.display = 'none';
    }, 3000); // 3000 milisegundos (3 segundos)
});
