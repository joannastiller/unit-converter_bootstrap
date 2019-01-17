const input = document.getElementById('input');
const btn = document.querySelector('button.btn');
const kgs = document.getElementById('dd-kg');
const grs = document.getElementById('dd-gr');
const lbs = document.getElementById('dd-lb');
const ozs = document.getElementById('dd-oz');
const output = document.getElementById('output');
const h4first = document.querySelector('.card-primary .card-block h4');
const h4second = document.querySelector('.card-success .card-block h4');
const h4third = document.querySelector('.card-danger .card-block h4');
const firstResult = document.getElementById('gramsOutput');
const secondResult = document.getElementById('lbsOutput')
const thirdResult = document.getElementById('ozOutput')

output.style.visibility = 'hidden';

function preventNonNumericalInput(e) {
    e = e || window.event;
    let charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    let charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
        e.preventDefault();
}

btn.addEventListener('click', function () {
    output.style.visibility = 'hidden';
    input.value = '';
})
kgs.addEventListener('click', function () {
    input.addEventListener('input', function (e) {
        output.style.visibility = 'visible';
        let kg = e.target.value;
        h4first.textContent = "Gramy";
        h4second.textContent = "Funty";
        h4third.textContent = "Uncje";
        firstResult.innerHTML = kg * 1000;
        secondResult.innerHTML = kg / 0.453592;
        thirdResult.innerHTML = kg * 35.2739;
    })
})

grs.addEventListener('click', function () {
    input.addEventListener('input', function (e) {
        output.style.visibility = 'visible';
        let gr = e.target.value;
        h4first.textContent = "Kilogramy";
        h4second.textContent = "Funty";
        h4third.textContent = "Uncje";
        firstResult.innerHTML = gr / 1000;
        secondResult.innerHTML = gr / 453.592;
        thirdResult.innerHTML = gr * 0.0352739;
    })
})

lbs.addEventListener('click', function () {
    input.addEventListener('input', function (e) {
        output.style.visibility = 'visible';
        let lb = e.target.value;
        h4first.textContent = "Gramy";
        h4second.textContent = "Kilogramy";
        h4third.textContent = "Uncje";
        firstResult.innerHTML = lb / 0.00220462;
        secondResult.innerHTML = lb / 2.20462;
        thirdResult.innerHTML = lb * 16;
    })
})

ozs.addEventListener('click', function () {
    input.addEventListener('input', function (e) {
        output.style.visibility = 'visible';
        let oz = e.target.value;
        h4first.textContent = "Gramy";
        h4second.textContent = "Kilogramy";
        h4third.textContent = "Funty";
        firstResult.innerHTML = oz / 0.0352739619;
        secondResult.innerHTML = oz / 35.2739619;
        thirdResult.innerHTML = oz / 16;
    })
})