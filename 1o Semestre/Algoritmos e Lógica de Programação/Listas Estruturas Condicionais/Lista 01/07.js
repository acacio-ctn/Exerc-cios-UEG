const prompt = require("prompt-sync")();

function valorASerPago(valorPreco,digitoForma){
  switch(digitoForma){  
  case (1): { 
    let desconto = (valorPreco * 10) / 100
    let valorPago = valorPreco - desconto
      console.log(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
      break;
      }
        case (2): { 
          let desconto = (valorPreco * 5) / 100
          let valorPago = valorPreco - desconto
            console.log(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
            break; 
            }
            case (3):{ 
                let valorPago = valorPreco / 2
                  console.log(`O valor a ser pago é de duas vezes de: R$${valorPago.toFixed(2)} sem juros.`)
                  break
                  }
                  default:
                    let juros = (valorPreco * 10) / 100
                    let valorComJuros = valorPreco + juros
                    let valorPago = valorComJuros / 3
                      console.log(`O valor a ser pago é de três vezes de: R$${valorPago.toFixed(2)} com juros`)
                      }
}                  
let valor = Number (prompt("Digite o valor da compra: "))
let digito = Number (prompt("Informe o dígito da forma de pagamento desejada: "))
let operacao = valorASerPago(valor,digito)
  
