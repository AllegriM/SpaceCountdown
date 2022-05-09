// JS COOUNTDOWN

const countdown = new Date('July 18, 2022 22:00:00').getTime();

const counter = setInterval(() =>{

    const today = new Date().getTime();

    let distance = countdown - today;

    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hora = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segs = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#dias').innerHTML = dias;
    document.querySelector('#horas').innerHTML = hora;
    document.querySelector('#mins').innerHTML = mins;
    document.querySelector('#segs').innerHTML = segs;
}, 1000);