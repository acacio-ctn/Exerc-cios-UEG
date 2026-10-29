function calculoEntrePontos(x1,y1,x2,y2){
const distancia = Math.sqrt(Math.pow(x2-x1,2)) + (Math.pow(y2 - y1,2))
return distancia
}
const prompt = require("prompt-sync")();
let x1 = Number(prompt("X do primeiro ponto: "));
let y1 = Number(prompt("Y do primeiro ponto: "));
let x2 = Number(prompt("X do segundo ponto: "));
let y2 = Number(prompt("Y do segundo ponto: "));
let distanciaPontos = calculoEntrePontos(x1,y1,x2,y2)
console.log(`A distância entre os pontos é de ${distanciaPontos}`)