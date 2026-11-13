const prompt = require("prompt-sync")();

function volumePiramide(b,a){;
    let volume = 1/3 * b * a;
    return volume;
}
let base = Number(prompt("Informe o valor da base: "));
let altura = Number (prompt("Informe o valor da altura: "));
let calculo = volumePiramide(base,altura)
console.log(`O volume da pirâmide é de: ${calculo.toFixed(2)}m3`)