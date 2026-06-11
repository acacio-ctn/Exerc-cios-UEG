const prompt = require("prompt-sync")();

function precoLitroCombustivelPorTipo(tipoCombust,quantLitros){
  switch (tipoCombust){
    case (1):
    let alcool = quantLitros * 4.805
    console.log(`O valor a ser pago é de R$${alcool.toFixed(2)}`);
      case (2):
        let diesel = quantLitros * 5.953
        console.log(`O valor a ser pago é de R$${diesel.toFixed(2)}`);
          default:
            let gasolina = quantLitros * 6.565
            console.log(`O valor a ser pago é de: R$${gasolina.toFixed(2)}`);
  }
}
let combustivel = Number (prompt("Informe o dígito do combustível desejado: "));
let litros = Number (prompt("Digite a quantidade de litros a ser abastecido: "));
let valorPago = precoLitroCombustivelPorTipo(combustivel,litros)