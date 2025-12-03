const prompt = require("prompt-sync")({sigint:true});

function agregarDatos(){
    
    let tamaño = parseInt(prompt("cuántas personas quieres registrar?: "));

    while (isNaN(tamaño) || tamaño <= 0){
    tamaño = parseInt(prompt("agrega un número valido de personas a registrar: "));
    }

    //aqui es lo importante
    let contador = 1;
    let Agenda = [];

    while(contador < tamaño + 1){
        console.log(`===== describe a la persona ${contador} =====`);
        
        let objetoPersonas = {
            nombre: String(prompt("Ingresa el nombre: ")),
            edad: parseInt(prompt("Ingresa la edad: ")),
            sueldo: parseFloat(prompt("Ingresa el sueldo: "))
        };

        Agenda.push(objetoPersonas);
        
        contador++;
    }

    console.log("===== fin del programa, gracias por usar la agenda 850000 ===============");
    console.log("===== las personas registradas son: =====================================");
    console.log(Agenda);
    console.log("===== las personas registradas son: =====================================")

    let totalSuedo = null
    //suma de todos los sueldos de todas las personas:
    Agenda.map(objetoPersonas=>{
        totalSuedo+=objetoPersonas.sueldo;
        console.log(`${objetoPersonas.nombre} de ${objetoPersonas.edad}, gana: $${objetoPersonas.sueldo}`)
    }
    )
    console.log(`todos los sueldos dan un total de: ${totalSuedo}`)
}

agregarDatos();