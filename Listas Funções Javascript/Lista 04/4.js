function trocaDeValores (valor1,valor2){
  let temp = valor1
  valor1 = valor2
  valor2 = temp
  return 
}
  let valorA = Number (prompt("Informe um valor: "));
  let valorB = Number (prompt("Informe outro valor: "))
  let troca = trocaDeValores (valorA,valorB)
  console.log(`O primeiro valor é ${valorB} e o segundo valor é ${valorA}`);
