function calculoPrestacaoAtraso (valorDaPrestacao,taxaDeJuros,tempoDeAtraso){
    const valorAtualizadoPrestacao = valorDaPrestacao + (valorDaPrestacao *(taxaDeJuros/100)*tempoDeAtraso);
    return valorAtualizadoPrestacao
}
const prompt = require("prompt-sync")();
let valorPrestacao = Number (prompt("Informe o valor da prestação (R$): "));
let taxaJuros = Number (prompt("Informe a taxa de juros (%): "));
let tempoAtraso = Number (prompt("Informe o tempo de atraso: "));
let prestacaoAtual = calculoPrestacaoAtraso (valorPrestacao,taxaJuros,tempoAtraso);
    console.log(`O valor atualizado da prestação é de ${prestacaoAtual.toFixed(2)}R$`);
