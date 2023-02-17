'use strict'

// App genera un número al azar entre 1 y 100 (como el del smile)
//Pistas de número alto o bajo.
//Contabiliza número de intentos.
//Si se quiere adivinar otro número, hay que cargar la página.
//Veces que se ha pulsado el botón prueba.

//Número aleatorio: function getRandomNumber(max) {
//return Math.ceil(Math.random() * max);}
//Mostrar el número aleatorio generado: console.log
//Al pulsar el botón de prueba acceder al contenido del input y mostrarlo en consola (event)
//Comparar el número escrito cn el input aleatorio y pintar las pistas en la pantalla
//Actualizar el contador de intentos por cada prueba.

const btn = document.querySelector('.js__button');
const inpNumber = document.querySelector('.js__number');
const attempsNum = document.querySelector('.js__attemps')
const msj = document.querySelector('.js__msj');
const hitNumber = document.querySelector('.js__hit');
let attemps = 0;

//Comparador de números:

function userMsj(){
    const inputNumValue = parseInt(inpNumber.value);//no tiene valor al recargar la página, por eso va dentro de la F
    let msjResult = "Tienes que introducir un número";

    if (inputNumValue === randomNumber){
        msjResult = 'Has ganado campeona!!';
    }else if (inputNumValue > randomNumber){
        msjResult = 'Número demasiado alto';
    }else if (inputNumValue < randomNumber){
        msjResult = 'Número demasiado bajo';
    }
    msj.innerHTML = msjResult;
}

function counter(){
    attemps++
    attempsNum.innerHTML = attemps;
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);//número aleatorio
    console.log('Mi número aleatorio es: ' + randomNumber);


function handleClickButton(event){
    event.preventDefault();

    userMsj();

    counter();
}

btn.addEventListener("click", handleClickButton);

