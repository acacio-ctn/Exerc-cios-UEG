const prompt = require("prompt-sync")();

function valorFinalPago(corEtiqueta,valorQuant,valorUnit){
    let desconto
    let valorFinal = valorQuant * valorUnit
    if ((corEtiqueta == "Verde") && (valorQuant <= 10)){
        desconto = (5 * valorFinal) / 100
    }else if ((corEtiqueta == "Verde") && (valorQuant > 10)){
            desconto = (valorFinal * 10) / 100
    }else if ((corEtiqueta == "Amarelo") && (valorQuant <= 5)){
                desconto = (valorFinal * 15) / 100
    }else if ((corEtiqueta == "Amarelo") && (valorQuant > 10)){
                    desconto = (valorFinal * 20) / 100
    }else{console.log(`CUSTO FINAL DA COMPRA: R$${valorFinal.toFixed(2)}`)}
   let descontoFinal = valorFinal - desconto
console.log(`CUSTO FINAL DA COMPRA: R$${descontoFinal.toFixed(2)}`)
}
let cor = (prompt("Informe a cor da etiqueta do produto: "));
let quantidade = Number (prompt("Dígite a quantidade de produtos do carrinho: "))
let unidade = Number (prompt("Dígite o preço unitário do produto: "))
let valorCompra = valorFinalPago(cor,quantidade,unidade)