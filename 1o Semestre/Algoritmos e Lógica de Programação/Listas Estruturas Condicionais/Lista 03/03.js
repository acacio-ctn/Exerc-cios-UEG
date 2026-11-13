const prompt = require ("prompt-sync")();

function calculoPrecoFilme(digitoDia,categoriaFilme,precoFilme){
    let desconto = (precoFilme * 40) / 100
    let acrescimo = (precoFilme * 15) / 100
    if ((digitoDia == 2) || (digitoDia == 3) || (digitoDia == 5)){
        if ((categoriaFilme == "Comum") || (categoriaFilme == "Lancamento")){ 
            custoFinal = precoFilme - desconto
        } 
                if (categoriaFilme == "Lancamento")
                    custoFinal = custoFinal + acrescimo
                         }else if((digitoDia == 1) || (digitoDia == 4) || (digitoDia == 6) || (digitoDia == 7)){
                            if(categoriaFilme == "Comum")
                                custoFinal = precoFilme
                            else if (categoriaFilme == "Lancamento")
                                custoFinal = precoFilme + acrescimo
    }
console.log(`O custo da alocação será de: R$${custoFinal.toFixed(2)}`)    
}
let dia = Number (prompt("Informe o dígito do dia de hoje (1-Domingo/2-Segunda/3-Terça/4-Quarta/5-Quinta/6-Sexta/7-Sábado): "))
let categoria = (prompt("Digite a categoria do filme(Comum/Lançamento): "))
let preco = Number (prompt("Digite o preço do filme a ser alocado: "))
let alocacao = calculoPrecoFilme(dia,categoria,preco)