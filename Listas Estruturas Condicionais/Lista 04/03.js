const prompt = require("prompt-sync")()

function calculoIMC(valorNome,vPeso,vAltura){
    let IMC = vPeso / Math.pow(vAltura,2)
    let faixaRisco
    if (IMC < 20){
        faixaRisco = "Abaixo do peso ideal"
    }else if((IMC >= 20) && (IMC <= 25)){
            faixaRisco = "Peso ideal"
    }else if ((IMC > 25) && (IMC <= 30)){
                faixaRisco = "Excesso de peso"
    }else if ((IMC > 30) && (IMC <= 35)){
                    faixaRisco = "Obesidade"
    }else if (IMC > 35){
                        faixaRisco = "Obesidade mórbida"
    }else{console.log("Valor de IMC inexistente.")}
console.log(`Nome do paciente: ${valorNome}`);
console.log(`IMC: ${IMC.toFixed(0)}`)
console.log(`Faixa de risco: ${faixaRisco}`)
}
let nome = (prompt("Dígite o nome do paciente: "))
let peso = Number (prompt("Dígite o peso do paciente (Em KG): "))
let altura = Number (prompt("Dígite a altura do paciente (Em Metros): "))
let imc = calculoIMC(nome,peso,altura)