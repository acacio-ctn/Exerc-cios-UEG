const prompt = require ("prompt-sync")();

function calculoPrecoFinal(precoCusto){
    let custoFinal = precoCusto
    let arCondicionado = (prompt("Digite Sim ou Não para adicionar ar condicionado ao veículo (S/N): "))    
        if (arCondicionado == "S"){
            custoFinal = custoFinal + 1750
        }
        let pinturaMetalica = (prompt("Digite Sim ou Não para adicionar pintura metálica ao veículo (S/N): "))
            if (pinturaMetalica == "S"){
                custoFinal = custoFinal + 800
                }
                    let vidroEletrico = (prompt("Digite Sim ou Não para adicionar vidro elétrico ao veículo (S/N): "))
                        if (vidroEletrico == "S"){
                            custoFinal = custoFinal + 1200
                        }
                            let direcaoHidraulica = (prompt("Digite Sim ou Não para adicionar direção hidráulica ao veículo (S/N): "))
                                if (direcaoHidraulica == "S"){ 
                                    custoFinal = custoFinal + 2000
                                }
console.log(`O valor final do veículo é de R$${custoFinal.toFixed(2)}`)        
                            }
let preco = Number(prompt("Informe o preço inicial do veículo: "))
let precoFinal = calculoPrecoFinal(preco)
    
 