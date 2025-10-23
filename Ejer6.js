//horas de sueño

prompt = require("prompt-sync")();

function Horasdesueño(){
    
    Edad = parseInt(prompt("¿cuántos años tienes?: "));
    Horasdormidas = parseInt(prompt("¿cuántas horas duermes al día?: "));
    Horastotales = Horasdormidas * 365 * Edad;

    console.log("has dormido " + Horastotales + " horas en tu vida");
}

Horasdesueño();