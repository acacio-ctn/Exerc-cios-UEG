const prompt = require("prompt-sync")()

function operacaoDe2Numeros(opAritmetica,v1,v2){
    let operacao
    let maior
    let menor 
    switch (opAritmetica){
        case ("Adição"):
            operacao = v1 + v2
            break
                case ("Subtração"):
                maior = Math.max(v1,v2)
                menor = Math.min(v1,v2)
                operacao = maior - menor
                break
                    case ("Multiplicação"):
                        operacao = v1 * v2
                        break
                            case ("Divisão"):
                                maior = Math.max(v1,v2)
                                menor = Math.min(v1,v2)
                                operacao = maior / menor
                                break
                                    default: 
                                    return
    }
console.log(`Resultado da operação é: ${operacao}`)
}
let operacaoAritmetica = (prompt("Escolha a operação a ser utilizada (Adição/Subtração/Multiplicação/Divisão): "));
let n1 = Number (prompt("Dígite o primeiro número inteiro: "));
let n2 = Number (prompt("Dígite o segundo número inteiro: "))
let calculo = operacaoDe2Numeros(operacaoAritmetica,n1,n2)