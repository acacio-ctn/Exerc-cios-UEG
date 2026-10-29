function calcularCustoLata(valorRaio,valorAltura){
const precoLata = 155
let calculoArea = (Math.PI * Math.pow(valorRaio,2) * 2) + (2 * Math.PI * valorRaio * valorAltura);
let custoLata = precoLata * calculoArea
return custoLata   
}
let raio = Number (prompt("Informe o raio: "));
let altura = Number (prompt("Informe a altura: "));
let custoLata = calcularCustoLata(raio,altura);
console.log (`O custo da lata será de ${custoLata.toFixed(2)}R$`);