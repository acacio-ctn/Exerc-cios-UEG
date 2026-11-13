function calcularNotas100(valorNota){ ;
    let notas100 = Math.floor(valorNota/100); // pega o valor e o divide no menor inteiro possivel ou seja 948 dividido por 100, retorna 9 "cems"inteiros desse valor
    let resto = valorNota % 100
    return notas100;  
}
    function calcularNotas50(valorNota ) {
    let notas100 = Math.floor(valorNota/100);
    let resto = valorNota % 100
    let notas50 = Math.floor(resto/50)
    resto = notas50 % 50
    return notas50
    }
        function calcularNotas10(valorNota) {
            let notas100 = Math.floor(valorNota/100)
            let resto = valorNota % 100
            let notas50 = Math.floor(resto/50)
            resto = valorNota % 50
            let notas10 = Math.floor(resto/10)
            resto = resto % 10
            return notas10
        }
            function calcularNotas5(valorNota) {
                let notas100 = Math.floor(valorNota/100);
                let resto = valorNota % 100
                let notas50 = Math.floor(resto/50)
                resto = resto % 50
                let notas10 = Math.floor(resto/10)
                resto = resto % 10
                let notas5 = Math.floor(resto/5);
                resto = resto % 5
                return notas5
            }

                function calcularNotas1(valorNota) {
                    let notas100 = Math.floor(valorNota/100)
                    let resto = Math.floor(valorNota%100)
                    let notas50 = Math.floor(resto/50)
                    resto = resto % 50
                    let notas10 = Math.floor(resto/10)
                    resto = resto % 10
                    let notas5 = Math.floor(resto/5)
                    resto = resto % 5
                    let notas1 = Math.floor(resto/1)
                    return notas1
                }
const prompt = require("prompt-sync")();
let dinheiro = Number (prompt("Digite o valor em dinheiro a ser decomposto: "))
let notas100 = calcularNotas100(dinheiro);
let notas50 = calcularNotas50(dinheiro);
let notas10 = calcularNotas10(dinheiro);
let notas5 = calcularNotas5(dinheiro);
let notas1 = calcularNotas1(dinheiro)
console.log("===================");
console.log(`Valor total (R$): ${dinheiro}`);
console.log("===================");
console.log(`Notas de R$100: ${notas100}`);
console.log(`Notas de R$50: ${notas50}`);
console.log(`Notas de R$10: ${notas10}`);
console.log(`Notas de R$5: ${notas5}`);
console.log(`Notas de R$1: ${notas1}`);
    