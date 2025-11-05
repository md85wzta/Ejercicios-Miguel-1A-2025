//me dijeron que había que hacer un ejercicio con un ciclo for y un arreglo y subir el repositorio
//estaba intentando hacer un justificante con un arreglo pero no me salió lo estaba escribiendo mientras iba en el tren
//let fuga = ["Yucatán ", "Mérida ", "Caucel", "Dzilbalchatún,", " El Centro", "Tuve que ir a ", " y a las Vaquerías tradicionales del centro", "Por motivos familiares (es enserio)"];

/*console.log(fuga[5,1,0,7] + "durante los días que estuve ahí (como 5 días) tuve que cuidar de mi abuela junto con mi tío Simon que viene de alemania");
console.log("y también junto con mi tío aprovechamos a ir a: " + (fuga[2, 3, 6]))

for(let i=0;i===8,i++){
    console.log
}s
*/

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
}
DatosArreglo();

/* .length nos da la cantidad de datos que hay dentro de un arreglo, y tal parece que para imprimirlos se hace UNO POR UNO
NOTA: eso explica el porqué mi practica de imprimir varios indices de arreglos no funcionaba y solo me daba el primero**

para llamar la cantidad de datos y sus valores correspondientes dentro del array se usa backstep, se separan
mencionando la iteración debido a su repetición, los datos dentro del arreglo se escriben así: ${Datos[1]} */
