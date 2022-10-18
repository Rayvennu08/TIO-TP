
"use strict";
/*Tabla dinámica */
let botonAgregar = document.querySelector("#btn-agregar");
let botonBorrar = document.querySelector("#btnBorrar");
let botonAgregarTres = document.querySelector("#btn-agregar-tres");
let tablaDinamica = [];


botonAgregar.addEventListener("click", agregarUno);
botonBorrar.addEventListener("click", borrarTodo);
botonAgregarTres.addEventListener("click", agregarTres);

function agregarUno(){
    let formTable = document.querySelector("#form-insertar-tabla");
    let form = new FormData(formTable);
    
    let nombre = form.get("nombre");
    let edad = form.get("edad");
    let apariencia = form.get("apariencia");
    let apodos = form.get("apodos");
    
    let personaje = {
        "nombre": nombre,
        "edad": edad,
        "apariencia": apariencia,
        "apodos": apodos,
    }
    tablaDinamica.push(personaje);
    mostrarTabla();
}

function borrarTodo(){
    tablaDinamica = [];
    mostrarTabla();
}

function mostrarTabla() {
    let tbody = document.querySelector("#insertarTabla");
    tbody.innerHTML = "";
    for (let item of tablaDinamica){
        tbody.innerHTML += `<tr>
                                <td>${item.nombre}</td>
                                <td>${item.edad}</td>
                                <td>${item.apodos}</td>
                                <td>${item.apariencia}</td>
                           </tr>`
        
    }
}

function agregarTres() {
    let formTable = document.querySelector("#form-insertar-tabla");
    let form = new FormData(formTable);
    
    let nombre = form.get("nombre");
    let edad = form.get("edad");
    let apariencia = form.get("apariencia");
    let apodos = form.get("apodos");
    
    let personaje = {
        "nombre": nombre,
        "edad": edad,
        "apariencia": apariencia,
        "apodos": apodos,
    }
    for ( let i=1; i<=3; i++ ) {
        tablaDinamica.push(personaje);
    }
    
    mostrarTabla();
}   