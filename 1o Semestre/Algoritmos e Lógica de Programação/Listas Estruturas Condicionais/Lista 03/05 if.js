const prompt = require("prompt-sync")();

function soma3Numeros(n1,n2,n3,n4){
    let soma3
    if (n1>n2 && n1>n3 && n1>n4){
        soma3 = n2 + n3 + n4
    }else if(n2>n3 && n2>n1 && n2>n4){
        soma3 = n3 + n1 + n4
    }else if(n3>n1 && n3>n2 && n3>n4){
        soma3 = n1 + n2 + n4
    }else{ soma3 = n1 + n3 + n2}
    console.log(`O soma dos três menores números é de: ${soma3}`)
}
let v1 = Number(prompt("Dígite o primero número: "));
let v2 = Number(prompt("Dígite o segundo número: "));
let v3 = Number(prompt("Dígite o terceiro número: "));
let v4 = Number(prompt("Dígite o quarto número: "));
let soma = soma3Numeros(v1,v2,v3,v4);