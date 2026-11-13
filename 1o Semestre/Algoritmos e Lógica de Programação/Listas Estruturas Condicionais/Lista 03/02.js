const prompt = require("prompt-sync")();

function consumoAgua(numeroConta,tipoConsumo,consumoM3){ 
   tipoConsumo = tipoConsumo.toLowerCase().trim()
    let taxa 
    let valorM3
    switch (tipoConsumo){
        case ("Residencial"):
            taxa = 5
            valorM3 = 0.55
        break;
                    case ("Comercial"):
                        taxa = 150
                        valorM3 = 1.25
                    break;
                                case("Industrial"):
                                    taxa = 280
                                        valorM3 = 2.54
                                break;
                                    default:
                                        console.log("Tipo de consumo inexistente/não registrado.");
                                            return
    }
let conta = taxa + (valorM3 * consumoM3)
console.log(`NÚMERO CONTA DO CLIENTE: ${numeroConta}`)
console.log(`TIPO CONSUMIDOR: ${tipoConsumo}`)
console.log(`CUSTO CONTA DE ÁGUA: R$${conta.toFixed(2)}`)
}
let numConta = Number (prompt("Informe o número da conta: "))
let tipoDConsumo = (prompt("Informe o tipo de consumo (Residencial/Comercial/Industrial): "))
let consumo = Number (prompt("Dígite o valor de água consumido em m3: "))
let valorContaAgua = consumoAgua(numConta,tipoDConsumo,consumo)