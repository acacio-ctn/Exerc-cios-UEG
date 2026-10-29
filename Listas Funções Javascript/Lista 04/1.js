function calculoPerdaCarga(valorVazao,diametroDoTubo,coeficienteDeRugosidade){
  const perdaDeCarga = (Math.pow(valorVazao,1.85)) * 10.643 * (Math.pow(diametroDoTubo,-4.87)) * (Math.pow(coeficienteDeRugosidade,-1.85));
  return perdaDeCarga
}
let vazao = Number (prompt("Digite o valor de vazão: "));
let diametroTubo = Number (prompt("Digite o valor do diâmetro do tubo: "))
let coeficienteRugosidade = Number (prompt("Digite o valor do coeficiente de rugosidade: "));
let resultadoPerda = calculoPerdaCarga(vazao,diametroTubo,coeficienteRugosidade)
console.log(`O valor de perda em tubulações foi de: ${resultadoPerda.toFixed(2)}.`)

