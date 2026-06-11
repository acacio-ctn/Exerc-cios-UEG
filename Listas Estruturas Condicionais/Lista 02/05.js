const prompt = require ("prompt-sync")();

function calculoPesoIdeal(valorAltura,sexo){
    switch (sexo){ 
    case ("Homem"):
        let pesoH = 72.7 * valorAltura - 58
        console.log(`Seu peso ideal é de: ${pesoH.toFixed(2)}kg`);
        break
            default: 
                let pesoM = 62.1 * valorAltura -44.7
                console.log(`Seu peso ideal é de: ${pesoM.toFixed(2)}kg`)
    }
}
let altura = Number (prompt("Dígite sua altura: "));
let genero = (prompt("Informe seu gênero (Homem/Mulher): "))
let peso = calculoPesoIdeal(altura,genero)