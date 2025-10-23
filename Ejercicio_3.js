/*El director de una escuela está organizando un viaje de estudios y requiere determinar 
cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el 
servicio. La forma de cobrar es la siguiente:

a. * Si son 100 alumnos o más, el costo por cada alumno es de $65. 
b. * De 50 a 99 alumnos, el costo es de $70. 
c. * De 30 a 49 alumnos, el costo es de $95. 
d. * Menos de 30 alumnos, el costo de la renta del autobús es de $4000, sin 
importar el número de alumnos. 

Realiza un programa que permita determinar el pago a la compañía de autobuses y lo 
que debe pagar cada alumno por el viaje.*/
const prompt = require("prompt-sync")({sigint:true});

function Presupuesto(){
    let alumnos = parseInt(prompt("¿Cuántos alumnos se van de ruta? "))
    let costo = 0;

    if (alumnos >= 100){
        costo = alumnos * 65;
        console.log(`hay ${alumnos} a bordo, cada uno deberá pagar 65, dando un total de: $${costo}`);
    } else if (alumnos >= 50 && alumnos <= 99){
        costo = alumnos * 70;
        console.log(`hay ${alumnos} a bordo, cada uno deberá pagar 70, dando un total de: $${costo}`);
    } else if (alumnos >= 30 && alumnos <= 49){
        costo = alumnos * 95;
        console.log(`hay ${alumnos} a bordo, cada uno deberá pagar 95, dando un total de: $${costo}`);
    } else {
        costo = 4000;
        console.log("al ser menos de 30 alumnos, el costo es de renta es de $4000");
        }
    }
Presupuesto();
Presupuesto();
Presupuesto();
Presupuesto();

