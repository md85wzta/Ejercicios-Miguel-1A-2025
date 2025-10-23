/*Realiza un programa que calcule la potencia de un número, 
dado este y su exponente. Pueden ocurrir tres casos: 

a. * El exponente sea positivo: imprime resultado en pantalla. 
b. * El exponente sea 0, el resultado es 1. 
c. * El exponente sea negativo, el resultado es 1/potencia con el exponente positivo.
*/

const prompt = require("prompt-sync")({ sigint: true });

function Potenciar(){
let numerito = Number(prompt("ingresa un número: "));
let exponente = Number(prompt("ingresa el exponente: "));
console.log(`Número: ${numerito}, Exponente: ${exponente}`);
let resultado;

if (exponente > 0){
    resultado = numerito ** exponente
    console.log(`El resultado con exponente positivo (${exponente}) es: ${resultado}`);
} else if (exponente === 0){
    resultado = 1;
    console.log(`El resultado con exponente de 0 es: ${resultado}`);
} else {
    resultado = 1 / numerito ** -exponente;
    console.log(`El resultado con exponente negativo (${exponente}) es: ${resultado}`);
}


}
Potenciar();
Potenciar();
Potenciar();
