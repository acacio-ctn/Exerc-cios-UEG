const prompt = require("prompt-sync")()

function ajusteSalario(valorSalario){ 
if (valorSalario <= 1412){ 
  let reajuste = (valorSalario * 50) / 100
  let total = valorSalario + reajuste
    console.log(`O salário reajustado será de ${total.toFixed(2)}R$`)
}else{(valorSalario > 1412)
  let reajuste = (valorSalario * 40) / 100
  let total = valorSalario + reajuste
    console.log(`O salário reajustado será de ${total.toFixed(2)}R$`)
    }
  }
  let salario = Number(prompt("Digite o salário: "))
  let reajuste = ajusteSalario(salario)
