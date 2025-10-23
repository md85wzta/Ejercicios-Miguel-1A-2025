//leer 2 numeros
const prompt = require("prompt-sync")();

function leerNumeros() {
    let A = 0
    let B = 0

    A = parseInt(prompt("ingresa el primer numero: "))
    B = parseInt(prompt("ingresa el segundo numero: "))

    if (A > B){
        console.log("la suma es: " + (A + B));
    } else if (B > A){
        console.log(`la sumatoria de ${A} + ${B} + ${A} + ${A} + ${B} = ${(A + B + A + A + B)}`);
    } else if (A === B){
        console.log("la multiplicación es: " + (A * B));
    }
}
leerNumeros();
leerNumeros();
leerNumeros();
