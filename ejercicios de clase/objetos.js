//profe andaba aprendiendo python desde el finde porque no me acordaba
//y ahi arpendi aque arreglo = diccionario y viseversa, a ver si le agarro la onda
let arreglo = [1, 2, 3];

let MiPersona = {
    "nombre": "Miguel",
    "apodo": "Wazita",
    "edad": 18,
    "altura": 170.5,
    "peso": 66,
}

console.log(MiPersona.nombre) //muestra el primer dato del obj (ya lo sabia pero es repaso)

//vere si me sale recorrerlo

//arreglo de objetos, ta facil

let arregloDeConocidosObj = [

    {
        "nombre": "Koiote",
        "edad": 18,
        "estudia": "Diseño Multimedia",
    },

    {
        "nombre": "Jackie",
        "edad": 19,
        "estudia": "Sistemas",
    },

    {
        "nombre": "Luis",
        "edad": 18,
        "estudia": "Sistemas",
    },
    
    {
        "nombre": "Dalila (Hiu)",
        "edad": 18,
        "estudia": "Ni idea",
    },

    {
        "nombre": "Elvis Cocho ",
        "edad": 30,
        "estudia": "FEBA (Fuerzas Especiales Bodega Aurrerá",
    }
]

//ahora si lo recorro (profe lo aprendí en youtube jajaja) pero no se usar bien => y el .map
for (let i = 0; i < arregloDeConocidosObj.length; i++){
    console.log(`========= Persona ${i+1} ==========`);
    console.log(`Se llama: ${arregloDeConocidosObj[i].nombre}`)
    console.log(`tiene: ${arregloDeConocidosObj[i].edad} años`)
    console.log(`y estudia: ${arregloDeConocidosObj[i].estudia}`)
}



console.log("===============objeto con arreglo dentro==============")
//veamos con un objeto con array que "aprendí"
const ObjArr = {
    nombre: "objeto con array",
    arr: ["piedra","mota","block"]
}

ObjArr.arr.forEach((elemento) => {
    console.log(elemento + "jeje")
});

//agregar hacer un arreglo dentro de un objeto con datos ingresados por el usuario

const prompt = require("prompt-sync")({sigint:true});
function agregarDatos(){
    console.log("===== agrega elementos al objeto =====");
    let nuevoObjeto = {};
    nuevoObjeto.nombre = String(prompt("Ingresa el nombre: "));
    nuevoObjeto.edad = parseInt(prompt("Ingresa la edad: "));
    nuevoObjeto.estudia = String(prompt("Ingresa la carrera que estudia: "));

    console.log(nuevoObjeto.nombre);
    console.log(nuevoObjeto);
}

agregarDatos();
