const prompt = require("prompt-sync")({sigint:true});

function rango(){
    let Numero =Number(prompt("ingresa un número del 1 al 5:- "))
    while(Numero < 1 || Numero > 5){
        console.log("vuelve a intentarlo")
        Numero = Number(prompt("ingresa un número del 1 al 5:- "))
    }
    console.log(`elegiste ${Numero}`)
}
rango();