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

console.log(MiPersona.nombre) //imprime el primer dato guardado en el objeto (ya lo sabia pero es repaso)

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