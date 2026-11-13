import { Pilha } from "./pilha.js"

const botao = document.getElementById('botao')

function verificarCapicua(){
    let numero = document.getElementById("entrada").value
    const saida = document.getElementById("saida")
    let saidaF 

    const pilha = new Pilha()

    const original = numero

    while(numero > 0){
        let isolado = numero % 10 // 1234 -> 4
        pilha.empilhar(isolado) // guardou o 4
        numero = Math.floor(numero / 10) // 1234 -> 123 | Aqui reduz o numero para que no proximo loop o ultimo seja isolado e o anterior ja esteja guardado na pilha
    }

    let x = 1
    let inverso = 0
    while(!pilha.estaVazia()){
    let algarismo = pilha.acessar() // acessa o numero do topo
        pilha.desempilhar()
       inverso = inverso + algarismo * x // 1 x 1 = 1
       x = x * 10 // 1, 10, 100, 1000...
    }

    if(inverso == original){
        saidaF = `${original} é Capicua.`
    }else{
        saidaF = `${original} não é Capicua.`
    }

    saida.innerHTML = saidaF
    
}

botao.addEventListener("click", verificarCapicua)