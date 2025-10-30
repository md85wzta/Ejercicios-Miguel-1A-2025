const prompt = require("prompt-sync")({sigint:true});

let numerito = Number(prompt("escribe un número:- "))
let suma = null

while (numerito != 0) {
    suma = suma + numerito
    numerito = Number(prompt("escribe otro número:- "))

}
console.log(`la suma de todos los números ingresados es:= ${suma}`)
