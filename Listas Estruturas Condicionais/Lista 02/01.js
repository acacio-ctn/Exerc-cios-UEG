const prompt = require("prompt-sync")();

function verificarQuadradoPerfeito(valorPositivo){
    let raiz = Math.sqrt(valorPositivo)
    if (raiz === Math.floor(raiz)){ 
        console.log(`${valorPositivo} é um quadrado perfeito.`)
    }else{
        console.log(`${valorPositivo} não é um quadrado perfeito.`) }
}

let numero = Number(prompt("Informe um número: "))
let verificarQuadrado = verificarQuadradoPerfeito(numero)