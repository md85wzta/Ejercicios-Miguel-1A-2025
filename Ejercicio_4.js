/*Hacer un programa que pregunte al usuario si desea continuar. Si el usuario pulsa una 
letra n (mayúscula o minúscula), el programa finalizará. Cualquier otra entrada repetirá 
la pregunta.*/

const prompt = require("prompt-sync")({sigint:true});

function Continuar(){
    let respuesta = '';
    while (respuesta.toLowerCase() !== 'n'){
        respuesta = prompt("¿Deseas continuar? (Pulsa 'n' para salir): ");
    }
}

Continuar();

/*comprendido que toLowerCase() sirve para que todo sea minuscula 
y tambien comparar sin importar si es mayuscula o minusculas

toUperCase() hace lo contrario, todo en mayusculas
*/