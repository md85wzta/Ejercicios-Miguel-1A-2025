//manipulando arreglos jeje

/* function Arreglo(){
    let arregloviejo = ["oso","iguana","mapache"];
    arregloviejo.push(6);
    console.log(arregloviejo);
    
    arregloviejo.unshift("merida")
    console.log(arregloviejo);
}

Arreglo(); */

//agregar objetos a arreglo con prompts
const prompt = require("prompt-sync")({sigint:true});
function arreglo_ese(){
    let arreglo2 = [];
    let respuesta = prompt(" tu arreglo está vacío, agrega un elemento, pulsa n para salir: ")

    while (respuesta.toLowerCase() !== "n"){
        arreglo2.push(respuesta);
        console.log(`tu arreglo se ve así: ${arreglo2}`)
        respuesta = prompt("agrega otro, pulsa n para salir: ")
    }
    console.log("tu arreglo quedó así: ------------ ")
    console.log(arreglo2)

    for(let respuesta of arreglo2)[
        console.log(`los datos del arreglo son ${arreglo2[respuesta]}`)
    ]
}

arreglo_ese();