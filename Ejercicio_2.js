/* Realiza un programa que calcule la aceptación de una solicitud con base a los 
siguientes parámetros: edad, nota y sexo. 
a. * Mínimo: Nota (5), edad (18), sexo M -> POSIBLE 
b. * Mínimo: Nota (5), edad (18), sexo F -> ACEPTADA 
c. * Otros casos -> NO ACEPTADA */
// se utilizó asistencia (dudas) a la IA para comprender mejor el uso de operadores lógicos

const prompt = require("prompt-sync")({sigint:true});

function AceptacionSoli(){
    let nota = parseInt(prompt("Ingresa la nota (0-10): "));
    let edad = parseInt(prompt("Ingresa la edad: "));
    let sexo = prompt("Ingresa el sexo (M/F): ").trim().toUpperCase(); 

    const Minimos = (nota >= 5 && edad >= 18);

    console.log(`dado que tu nota es: ${nota}, tienes ${edad} años y tu sexo es: ${sexo}`);
    
    //mujer
    if (Minimos && sexo === 'F'){
        console.log(" tu solicitud fue ACEPTADA")
    } else if (Minimos && sexo === 'M'){
        console.log("tu solicitud ES POSIBLE")
    } else {
        console.log("tu solicitud NO FUE ACEPTADA")
    }
}
AceptacionSoli();
AceptacionSoli();
