//Indice de contaminacion

prompt = require("prompt-sync")();

function IndiceContaminacion(){
    Indice = parseFloat(prompt("¿cuál es el índice de contaminación actual?: "));

    if (Indice <= 37){
        console.log("el índice es aceptable");
    } else if (Indice >= 38 && Indice <= 55){
        console.log("el índice es desagradable");
    } else if (Indice > 55){
        console.log("el índice es peligroso");
    }
}
IndiceContaminacion();
IndiceContaminacion();
IndiceContaminacion();