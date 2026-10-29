function calculoHorasCharrete (valorHoras) { 
  let grupos3Horas = Math.floor(valorHoras/3);
  let resto = valorHoras % 3
  let horasExtra = resto * 3.50
  let horasPadrao = grupos3Horas * 8.50
  let total = horasExtra + horasPadrao
  return total
 }
  let horas = Number (prompt("Digite o número de horas de uso da charrete: "));
  let taxa = calculoHorasCharrete(horas)
  console.log(`O valor a ser pago é de ${taxa}R$`)