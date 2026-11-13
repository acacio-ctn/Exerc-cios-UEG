const prompt = require("prompt-sync")();
function ParOuImpar(valorNumero){
    if ((valorNumero % 2) == 0){
      console.log(`${valorNumero} é par.`)
    }else{
      console.log(`${valorNumero} é ímpar.`)
    }

}
let numero = Number(prompt("Dígite um número: "));
  let verificar = ParOuImpar(numero)