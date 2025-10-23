//preguntar por edad y permitir acceso
prompt = require("prompt-sync")();

function Validaracceso(){
    let edad = 0;
    edad = parseInt(prompt("Ingresa tu edad: "));

    if (edad >=18){
        console.log("acceso permitido");
    } else {
        console.log("acceso denegado");
    }
}

Validaracceso();
Validaracceso();
