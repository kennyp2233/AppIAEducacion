const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

// Boton Inicio 
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', function() {
    window.location.href = 'futuro.html';
});