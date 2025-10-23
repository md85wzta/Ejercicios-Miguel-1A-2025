//que tan bien es la calificacion
prompt = require("prompt-sync")();

function Promedioalumno(){
    let calif = 0;
    calif = parseInt(prompt("Ingresa la calificacion del alumno: "));

    if (calif >90 && calif <=100){
        console.log("Excelente");
    } else if (calif >=70 && calif <90){
        console.log("bien");
    } else if (calif >=0 && calif <=70){
        console.log("reprobado");
    }
}
Promedioalumno();
Promedioalumno();
Promedioalumno();