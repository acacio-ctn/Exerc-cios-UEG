const prompt = require("prompt-sync")();

function conversorReal(dinheiroR,digitoMoeda){
    switch (digitoMoeda){ 
    case (1):
        let euro = dinheiroR / 5.418
        console.log(`A quantia convertida é de ${euro.toFixed(2)}€`)
    break;
        case (2):
            let libra = dinheiroR / 6.336
            console.log(`A quantia convertida é de £${libra.toFixed(2)}`)
            break
                default:
                    let dolar = dinheiroR / 5.189
                    console.log(`A quantia convertida é de $${dolar.toFixed(2)}`)
    }

}
let reais = Number (prompt("Informe a quantidade em reais: "));
let digito = Number (prompt("Informe o dígito da moeda desejada (1 para Euro/2 para Libra Esterlina/3 para Dólar): "))
let conversao = conversorReal(reais,digito)