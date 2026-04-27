function calculoDigitoVerificador(valor){
  let ultimo = valor % 10 //pegar o ultimo digito
  let resto = Math.floor(valor / 10) // retirou o valor decimal originario da operação acima deixando apenas os dois digitos para seguir a operação
  let segundo = resto % 10 // pegar o ultimo digito novamente
  let primeiro = Math.floor(resto / 10) // agora apenas pegue o segundo numero usando o math.floor vc removerá a parte decimal (segundo digito) e ficara apenas com o primeiro
  let valorInvertido = (ultimo * 100) + (segundo * 10) + primeiro // obtido o valor invertido
  let valorSoma = valor + valorInvertido // 
  let digito1 = valorSoma % 10
  let resto2 = Math.floor(valorSoma / 10 ) //Atenção
  let digito2 = resto2 % 10
  let digito3 = Math.floor(resto2 / 10) 
  let multiplicacao1 = digito1 * 1
  let multiplicacao2 = digito2 * 2 
  let multiplicacao3 = digito3 * 3
  let somaMultiplos = multiplicacao1 + multiplicacao2 + multiplicacao3
  let digitoVerificador = somaMultiplos % 10
  return digitoVerificador

}
  let digitoContaCorrente = Number (prompt("Informe o número da conta-corrente de 3 dígitos: "));
  let digitoVerificador = calculoDigitoVerificador(digitoContaCorrente);
    console.log(`O dígito verificador da conta é ${digitoVerificador}`);