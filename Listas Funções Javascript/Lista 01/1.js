const prompt = require("prompt-sync")();

function operacoesBasicas(valor1,valor2){
    let adicao = valor1 + valor2
        let subtracao = valor1 - valor2
            let multiplicacao = valor1 * valor2
                let divisaoQuociente = valor1 / valor2
                    let divisaoResto = valor1 % valor2
                        let potencia = Math.pow(valor1,valor2)
                            let raizQuadrada = Math.sqrt(valor1)
                                let raizCubica = Math.pow(valor2,1/3)

}
let numero1 = Number (prompt("Digite o primeiro número: "))
let numero2 = Number (prompt("Digite o segundo número: "))
    let operacoes = operacoesBasicas(numero1,numero2)
console.log(`As seguintes operações com os dois valores informados são ${operacoes}`)
