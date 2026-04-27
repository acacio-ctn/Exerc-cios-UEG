function calculoNovoValorVeiculo (precoDeCusto){
  let porcentagemDistribuidor = (precoDeCusto * 12) /100 
  let imposto = (precoDeCusto * 30) / 100
  let precoNovo = precoDeCusto + porcentagemDistribuidor + imposto;
  return precoNovo
}
  let valorCusto = Number (prompt("Valor de custo do veículo: "))
  let valorAtualizado = calculoNovoValorVeiculo(valorCusto);
  console.log(`O valor final do veículo será de ${valorAtualizado.toFixed(2)}R$`);