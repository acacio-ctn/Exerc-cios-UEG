function calculoLado1Teorema (valorM,valorN){
  let lado1 = Math.pow(valorM,2) - Math.pow(valorN,2);
    return lado1
}
  function calculoLado2Teorema (valorM,valorN){
    let lado2 = 2 * valorM * valorN 
    return lado2
  }
    function hipotenusaTeorema (valorM,valorN){
      let hipotenusa = Math.pow(valorM,2) + Math.pow(valorN,2)
      return hipotenusa
    }
    console.log("-----CALCULADOR DE TEOREMA DE PITAGORAS-----");
    console.log("(Digite apenas números inteiros e reais. Sendo o primeiro dígito sempre maior que o segundo. )");
      let valor1 = Number (prompt("Digite o primeiro valor: "));
      let valor2 = Number (prompt("Digite o segundo valor: "));
      let lado1 = calculoLado1Teorema(valor1,valor2);
      let lado2 = calculoLado2Teorema(valor1,valor2)
      let hipotenusa = hipotenusaTeorema(valor1,valor2);
      console.log(`Lado 1 do triângulo: ${lado1}`);
      console.log(`Lado 2 do triângulo: ${lado2}`);
      console.log(`Hipotenusa: ${hipotenusa}`);


