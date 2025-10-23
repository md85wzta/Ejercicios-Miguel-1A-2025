//par, impar o 0

const prompt = require("prompt-sync")();

function Detectar(){
    numero = parseInt(prompt("ingresa el número: "))
    if (numero >0){
        if (numero % 2 == 0){
            console.log("es par");
        } else if (numero % 2!=0){
            console.log("es impar");
        }
    }
}
Detectar();
Detectar();
Detectar();