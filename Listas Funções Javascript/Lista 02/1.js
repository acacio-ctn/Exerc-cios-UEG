function calcularCustoViagem(tempo,velocidade) {
    const distancia = tempo * velocidade
    const quantidadeLitros = distancia/12.5
    const custo = quantidadeLitros * 6.20
    return custo;
}
const prompt = require("prompt-sync")()
let vel = Number(prompt("Digite a velocidade média: "));
let temp = Number(prompt("Digite o tempo de viagem em horas: "))
let custoViagem = calcularCustoViagem(temp,vel);
// Saída de dados
    console.log(`O custo da viagem será ${custoViagem}`);