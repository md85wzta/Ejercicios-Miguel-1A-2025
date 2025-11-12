//usar array y function
//tal parece que se trata de un bucle que imprima solo los valores pares del arreglo
function DatosArreglo(){
    let Datos = [2,8,5,2,9,1];
    let resultado = null

    for (let i=0;i<Datos.length;i++){
        if (Datos[i]%2==0){
            resultado+=Datos[i];
        }
    }
    console.log(`la suma de todos los datos es ${resultado}`);
    /* recorrer con for of */

    for(let numeros of Datos)[
        console.log(`los datos del arreglo son ${Datos[numeros]}`)
    ]

    /* for in */
    for(let numeros in Datos){
        console.log(`los datos son ${Datos[numeros]}`)
    }

    /* for each */
    /* console.log("FOR EACH_----------------------")
    Datos.forEach(function(numeros){
        console.log(numeros);

    }) */
    //es lo mismo pero con una funcion anonima.
    Datos.forEach(numeros=>console.log(numeros))

    //con MAP
    console.log("map------")
    Datos.map(numero=>console.log(numero))

    //do while
    console.log("do while ------------") 
    let iii = 0
    do{
        console.log(Datos[iii]);
        iii++;
    }while(iii < Datos.length)
    
    //filter
    console.log("filter ---------------");
    const newArreglo = Datos.filter(numerit0s =>{
        return numerit0s<7;
    })
    console.log(newArreglo)

    //reduce
    console.log("reduce ------------")
    let sumita = 0;
    Datos.reduce((a,b)=>suma=a+b)
    console.log(sumita)
    
}
DatosArreglo();

/* .length nos da la cantidad de datos que hay dentro de un arreglo, y tal parece que para imprimirlos se hace UNO POR UNO
NOTA: eso explica el porqué mi practica de imprimir varios indices de arreglos no funcionaba y solo me daba el primero**

para llamar la cantidad de datos y sus valores correspondientes dentro del array se usa backstep, se separan
mencionando la iteración debido a su repetición, los datos dentro del arreglo se escriben así: ${Datos[1]} */
