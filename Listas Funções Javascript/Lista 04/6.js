function inverterValor(numero){
    let digito3 = numero % 10 // obtem o ultimo digito ex: 123 -> 3
    let restante = Math.floor(numero / 10) // obtem os valores inteiros ou seja tira o terceiro dígito ex: 123 -> 12
    let digito2 = restante % 10 // agora com o resto da divisão obtido acima (12) pegamos o resto da divisao por 10 (2)
    let digito1 = Math.floor(restante/10) // utilizando a var "restante" (12) usando o mathfloor obtemos o digito responsavel pelo valor inteiro de 10 que é o 1 ou seja 123 -> 1
    numInvertido = (digito3 * 100) + digito2 * 10 + digito1
    return numInvertido
}
const prompt = require("prompt-sync")();
    let numero = Number (prompt("Digite um valor para ser invertido: "));
    inverter = inverterValor(numero)
console.log(`Número original: ${numero} | Número invertido: ${inverter}`);