const dialog = document.getElementById('dialog');

// Botones
const homeBtn = document.getElementById('homeBtn');

const exitBtn = document.getElementById('exit-button');
// Listeners


exitBtn.addEventListener('click', function(){
    window.location.href = 'futuro.html';
});

homeBtn.addEventListener('click', function () {
    dialog.style.display = 'block';
});

