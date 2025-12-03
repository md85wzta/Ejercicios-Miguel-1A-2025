//esto ta facil, nomas copio y pego y ya haggo mi magia al estilo wazita jejejeje
const prompt = require("prompt-sync")({sigint:true});

console.log("===== agenda de personas 850000 =====");

function agregarDatos(){
    
    let tamaño = parseInt(prompt("cuántas personas quieres registrar?: "));

    while (isNaN(tamaño) || tamaño <= 0){
    tamaño = parseInt(prompt("agrega un número valido de personas a registrar: "));
    }

    let contador = 1;
    let Agenda = [];

    while(contador < tamaño + 1){
    console.log(`===== describe a la persona ${contador} =====`);
    
    let objetoPersonas = {
        nombre: String(prompt("Ingresa el nombre: ")),
        edad: parseInt(prompt("Ingresa la edad: ")),
        estudia: String(prompt("Ingresa la carrera que estudia: ")),
        hobbies: String(prompt("Cuál es el hobby de esta persona (separa con comas si son varios): ")).split(","),
    };

    Agenda.push(objetoPersonas);
    
    console.log(`===== datos de la persona ${contador} registrada =====`);
    console.log(` hola ${Agenda[contador-1].nombre}, tus datos son:`);
    console.log(Agenda[contador-1]);
    
    contador++;
    }

    console.log("===== fin del programa, gracias por usar la agenda 850000 ===============");
    console.log("===== las personas registradas son: =====================================");
    console.log(Agenda);
    console.log("===== las personas registradas son: =====================================")
}

agregarDatos();

