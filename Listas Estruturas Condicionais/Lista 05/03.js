const prompt = require("prompt-sync")();

function verificarPalindromo(num5){ // num5 exemplo = 97379
    let resto
    let ultimoDigit = num5 % 10 // obteremos 9 pois ele é o unico digito que não é divisivel por 10 portanto é o que sobra]
    let primeiroDigit = Math.floor(num5/10000) // obtemos 9 pois ele pega o apenas o valor da divisão inteira pelo valor que é 10000, basicamente ele pega quantas vezes 10000 cabe dentro do nosso número
    let obterDigit2 = Math.floor(num5/1000) // obtemos 97
    let digit2 = obterDigit2 % 10 // obtemos o digito 2 aqui o 7
    let obterDigit4 = Math.floor(num5/10) // obtemos 9737
    let digit4 = obterDigit4 % 10 // obtemos 7
        if (!((ultimoDigit == primeiroDigit) && (digit2 == digit4))){
            console.log("NÃO É UM NÚMERO PALÍNDROMO.")
            return
        }else{ 
        console.log("É UM NÚMERO PALÍNDROMO.")
        }
}
let digito = Number (prompt("Informe um número de 5 dígitos: "))
let palindromo = verificarPalindromo(digito)