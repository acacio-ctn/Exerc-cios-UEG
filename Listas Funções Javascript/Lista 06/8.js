function calculoForma(valorDaPeca1,quantidadePeca1,valorDaPeca2,quantidadePeca2,valorIPI) { 
  let formula = (valorDaPeca1*quantidadePeca1+valorDaPeca2*quantidadePeca2) * (valorIPI/100 + 1);
  return formula
 }
  let percentagemIPI = Number (prompt("Informe a percentagem do IPI a ser acrescido no valor das peças: "))
  let codePeca1 = Number (prompt("Informe o código da peça 1: "));
  let valorPeca1 = Number (prompt("Informe o valor unitário da peça 1: ")) 
  let quantPeca1 = Number (prompt("Informe a quantidade de peças 1: "))
  let codePeca2 =  Number (prompt("Informe o código da peça 2: "));
  let valorPeca2 = Number (prompt("Informe o valor unitário da peça 2: "));
  let quantPeca2 = Number (prompt("Informe a quantidade de peças 2: "));
  let formula = calculoForma(valorPeca1,quantPeca1,valorPeca2,quantPeca2,percentagemIPI);
  console.log(`Código peça 1: ${codePeca1}`)
  console.log(`Código peça 2: ${codePeca2}`)
  console.log(`Valor final a ser pago: ${formula.toFixed(2)}R$`);