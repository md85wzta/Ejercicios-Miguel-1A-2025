const prompt = require("prompt-sync")({sigint:true});

let numero = parseInt(prompt("ingresa un número par:- "))
let suma = 0
while(numero %2 == 0){
    suma = suma + numero
    numero = parseInt(prompt("ingresa otro número par:- "))
}
console.log(`ingresaste un número impar: (${numero}), la suma final es: ${suma}`);
