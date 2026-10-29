const prompt = require("prompt-sync")();

function verificarCaracteristica(valorNumero){
  let obter2Primeiros = Math.floor(valorNumero/100);
    let obter2Ultimos = valorNumero % 100
      let soma = obter2Primeiros + obter2Ultimos
        let quadrado = Math.pow(soma,2)
if (quadrado == valorNumero){
    console.log(`O número ${valorNumero} possui a característica.`)
}else{
  console.log(`O número ${valorNumero} não possui a característica.`)
}
        
}
let numero = Number (prompt("Digite um número de 4 digitos positivo inteiro a ser analisado: "));
let verificar = verificarCaracteristica(numero)