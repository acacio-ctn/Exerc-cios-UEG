function escreverIdadeDias (idadeAno,idadeMes,idadeDias){
    let anosPDias = idadeAno * 365
    let mesesPDias = idadeMes * 30
    idadeEmDias = anosPDias + mesesPDias + idadeDias
    return idadeEmDias
}
const prompt = require("prompt-sync")();
    let anos = Number (prompt("Digite sua idade em anos: "));
    let meses = Number (prompt("Digite sua idade em meses até completar mais um ano EX(21 anos ->7 meses<- e 6 dias): "));
    let dias = Number (prompt("Digite sua idade em dias até completar mais um mês: Ex(21 anos, 7 meses e ->6 DIAS<-): "))
    idadeDias = escreverIdadeDias(anos,meses,dias);
console.log(`Você já viveu ${idadeDias} de vida.`);