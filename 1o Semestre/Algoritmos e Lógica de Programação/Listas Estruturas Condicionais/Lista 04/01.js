const prompt = require("prompt-sync")();

function calculoMediaFinal(digitAluno,n1,n2,n3,mediaExerc){
    let situacao
    let conceito
    let mediaFinal = ((n1+n2+n3) * 3 + mediaExerc) / 7
        if (mediaFinal < 4){
            conceito =  "E"
        }else if((mediaFinal >= 4.1) && (mediaFinal <= 6)){
                    conceito = "D"
                    }else if((mediaFinal >= 6.1) && (mediaFinal <= 7.5)){
                        conceito = "C"
                        }else if((mediaFinal >= 7.6 ) && (mediaFinal <= 9)){ 
                            conceito = "B"
                            }else if((mediaFinal >= 9.1) && (mediaFinal <= 10)){ 
                               conceito = "A"
if (conceito = "A" || "B" || "C"){
    situacao = "APROVADO"
}else if (conceito = "D" || "E"){
    situacao = "REPROVADO"
}else{console.log("SITUAÇÃO INEXISTENTE")}
                            }
console.log(`NÚMERO DO ALUNO: ${digitAluno}`);
console.log(`NOTAS: N1 - ${n1} | N2 - ${n2} | N3 - ${n3}`)
console.log(`MÉDIA NOS EXERCÍCIOS: ${mediaExerc}`);
console.log(`MÉDIA FINAL: ${mediaFinal.toFixed(2)}`)
console.log(`CONCEITO: ${conceito}`)
console.log("-------------------------")
console.log(`${situacao}`)
console.log("-------------------------")
}
let numeroIdentificador = Number (prompt("Dígite o número identificador do aluno: "))
let nota1 = Number(prompt("Dígite a primeira nota: "));
let nota2 = Number(prompt("Dígite a segunda nota: "));
let nota3 = Number(prompt("Dígite a terceira nota: "))
let mediaExercicios = Number (prompt("Dígite a nota média dos exercícios da avaliação em questão: "))
let notaAluno = calculoMediaFinal(numeroIdentificador,nota1,nota2,nota3,mediaExercicios)