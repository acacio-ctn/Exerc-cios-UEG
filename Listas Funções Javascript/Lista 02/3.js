function calcularMedia(nota1, nota2, nota3){
    const media = (nota1 * 2 + nota2 * 3 + nota3 * 5)/10;
    return media
}
const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Primeira nota: "));
const nota2 = Number(prompt("Segunda nota: "));
const nota3 = Number(prompt("Terceira nota: "));
const media = calcularMedia(nota1,nota2,nota3)
console.log(`Media = ${media}`);