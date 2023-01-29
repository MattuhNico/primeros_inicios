//Número random para el fondo
function random(numero) {
    return Math.floor(Math.random() * (numero + 1))
}

function cambiarFondo() {
    let color = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
    document.body.style.backgroundColor = color;
}

//Evento del botón
let btn = document.getElementById("btn");
btn.addEventListener('click', cambiarFondo);
