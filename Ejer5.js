//convertir las medidas de la señorita san marcos

function ConvertirMedidas() {
    let pulgada = 0.393701;
    let pie = 3.28084;
    let libra = 2.20462;
    
    busto = 89 * pulgada;
    cintura = 58 * pulgada;
    cadera = 89 * pulgada;
    altura = 1.70 * pie;
    peso = 53 * libra;

    console.log("las medidas convertidas al sistema inglés son: ");
    console.log("busto: " + busto.toFixed(2) + " pulgadas");
    console.log("cintura: " + cintura.toFixed(2) + " pulgadas");
    console.log("cadera: " + cadera.toFixed(2) + " pulgadas");
    console.log("altura: " + altura.toFixed(2) + " pies");
    console.log("peso: " + peso.toFixed(2) + " libras");
}
ConvertirMedidas();


