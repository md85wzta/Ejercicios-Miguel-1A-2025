//Ejercicio 1. detectar si un numero es 0 positivo o negativo
prompt = require("prompt-sync")();
function Detectarnumero(){
let numero = Number(prompt("Ingrese un numero: "));

if (numero >0) {
    console.log("El numero es positivo");
}
else if (numero <0) {
    console.log("El numero es negativo");
}   
else {
    console.log("El numero es igual a 0");
}
}
Detectarnumero();
Detectarnumero();
Detectarnumero();