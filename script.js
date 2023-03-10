// Elementos
let horaElementos = document.querySelector(".rd-hora");
let minutoElementos = document.querySelector(".rd-minuto");
let segundoElementos = document.querySelector(".rd-segundo");

// Funções
function comecaRelogio() {
    let data = new Date();

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    

    horaElementos.innerHTML = `${acrecentaZero(hora)}`;
    minutoElementos.innerHTML = `${acrecentaZero(minuto)}`;
    segundoElementos.innerHTML = `${acrecentaZero(segundo)}`;
};

function acrecentaZero(zero) {
    if(zero < 10) {
        return "0" + zero;
    } else {
        return zero;
    };
};

// Intervalos
setInterval(comecaRelogio, 1000);
comecaRelogio();