const prompt = require("prompt-sync")();

function soma3Numeros(n1,n2,n3,n4){ ;
    let total = n1 + n2 + n3 + n4
   let maior = Math.max(n1, n2, n3, n4);
    let tres = total - maior
    return tres
}
let v1 = Number (prompt("Digite o primeiro número: "));
let v2 = Number (prompt("Digite o segundo número: "));
let v3 = Number (prompt("Digite o terceiro número: "));
let v4 = Number (prompt("Digite o quarto número: "));
let soma = soma3Numeros(v1,v2,v3,v4);
console.log(`A soma dos três menores valores é de: ${soma}.`)
