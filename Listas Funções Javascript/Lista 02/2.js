function calcularValorDiscrimante(coefA,coefB,coefC){
    let delta = Math.pow(coefB,2) - 4 * coefA * coefC
    return delta 
}
    const prompt = require("prompt-sync")();
    let coeficienteA = Number (prompt("Informe o coeficiente A: "));
    let coeficienteB = Number (prompt("Informe o coeficiente B: "));
    let coeficienteC = Number (prompt("Informe o coeficiente C: "));
    delta = calcularValorDiscrimante(coeficienteA,coeficienteB,coeficienteC);
    console.log(`O valor de delta na equação é: ${delta}: `);

