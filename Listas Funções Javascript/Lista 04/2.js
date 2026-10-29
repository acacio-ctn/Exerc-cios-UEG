function calculoRendaTotalPartida(publico){
  let ingresso5 = (publico * 10 / 100)
  let ingressoPopular = ingresso5 * 5
  let ingresso10 = (publico * 50 / 100)
  let ingressoGeral = ingresso10 * 10 
  let ingresso20 = (publico * 30 / 100);
  let ingressoArquibancada = ingresso20 * 20
  let ingresso40 = (publico * 10 / 100);
  let ingressoCadeiras = ingresso40 * 40
  let rendaPartida = ingressoPopular + ingressoGeral + ingressoArquibancada + ingressoCadeiras;
  return rendaPartida
}
let publico = Number (prompt("Digite o número de pessoas que compraram ingressos: "));
let rendaTotal = calculoRendaTotalPartida(publico);
  console.log(`A renda total da partida será de ${rendaTotal.toFixed(2)}R$`);
