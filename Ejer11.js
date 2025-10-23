//detectar impares y contar cuantos hay

const prompt = require("prompt-sync")();

function contarImpares() {
    numerito = parseInt(prompt("ingresa un numero:"));
    let contador = 0;
    console.log("los numeros impares del 1 hasta " + numerito + " son:");

    for (let i = 1; i <=numerito; i++){
        if (i % 2 != 0){
            console.log(i);
            contador++;
        }
    }
    console.log("existen " + contador + " numeros impares");
}
contarImpares();