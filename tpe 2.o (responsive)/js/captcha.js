"use strict";
//Captcha de contacto.html

let valorCaptcha = document.getElementById('codigo');
let formulario = document.getElementById('respuesta');
let submitButton = document.getElementById('enviar');
let refreshButton = document.getElementById('reset');

//se llama la funcion que genera el codigo captcha
generateCaptchaCode();

submitButton.addEventListener('click', testear);
refreshButton.addEventListener('click', generateCaptchaCode);

function generateCaptchaCode() {
    //se vacía el parrafo del html para que no quede superpuesto con el anterior al resetear
    document.getElementById('resultado').innerHTML = " "; 

    let captchaRandom = Math.floor(Math.random() * 60000) + 10000; 
    
    let captchaCode = captchaRandom;
    valorCaptcha.innerHTML = captchaCode;

}

function testear(e) {
  e.preventDefault();
  if (formulario.value == valorCaptcha.textContent) {
    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = "Captcha PIOLA";
    document.getElementById('email').value = "";
    document.getElementById('tel').value = "";
  }
  else {
    let parrafo = document.getElementById('resultado');
    parrafo.innerHTML = "Captcha NO PIOLA";
  }
}

/*Tabla dinámica */
const boton = document.querySelector("#btn");
boton.addEventListener("click", agregar);
let tablaDinamica = [];

function agregar() {
  console.log("Funcion Agregar");
  let personajes = parseInt (document.querySelector("#person").value);
  let edad = parseInt(document.querySelector("#age").value);
  let name = parseInt(document.querySelector("#apodos").value);
  let renglon = {
    Personajes: personajes,
    Edad: edad,
    Apodos: name,
  }
  tablaDinamica.push(renglon);
  console.log(renglon);
}