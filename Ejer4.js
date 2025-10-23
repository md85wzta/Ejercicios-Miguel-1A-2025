//hacer la tabla de multiplicar de un numero ingresado
prompt = require("prompt-sync")();

function Tablamultiplicar(){
    let numerito = 0;
    let multiplo = 0;

    numerito = parseInt(prompt("¿que número quieres multiplicar?: "));
    multiplo = parseInt(prompt("¿cuántas veces quieres multiplicarlo?: "));

    for (let i = 1; i <= multiplo; i++) {
        let resultado = numerito * i;
        console.log(numerito + " x " + i + " = " + resultado);
    }
}

Tablamultiplicar();