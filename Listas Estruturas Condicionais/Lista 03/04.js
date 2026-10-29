const prompt = require("prompt-sync")();

function custoPulverizacao(inputNome,tipoPulverizacao,areaPulv){
    let valorPAcre
    if (tipoPulverizacao == 1){
        valorPAcre = 50
        }else if(tipoPulverizacao == 2){
            valorPAcre = 100
                }else if (tipoPulverizacao == 3){
                    valorPAcre = 150
                        }else if (tipoPulverizacao == 4){
                            valorPAcre = 250
                                }else{
        console.log("Tipo de pulverização inexistente/não registrado.")
    } 
    let custoFinal = areaPulv * valorPAcre
    if(areaPulv > 350){
        let desconto = (custoFinal * 5) / 100
        custoFinal = custoFinal - desconto 
            if (custoFinal >= 10.750){
                let desconto = (custoFinal * 10) / 100
                        custoFinal = custoFinal - desconto
                                    }
                }
console.log(`Nome do cliente: ${inputNome}`);
console.log(`Valor a ser pago: R$${custoFinal.toFixed(2)}`);
}
let nome = (prompt("Digite seu nome: "));
let digitoPulv = Number (prompt("Informe o dígito do tipo de pulverização escolhida: "));
let area = Number (prompt("Informe quantos acres serão pulverizados: "))
    let pulverizacao = custoPulverizacao(nome,digitoPulv,area);