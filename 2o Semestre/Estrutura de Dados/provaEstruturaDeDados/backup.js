import { Pilha } from "./pilha.js";

const tamanhoVetor = document.getElementById("tamanhoVetor")
const botaoGerar = document.getElementById("btnGerar")
const saidaVetor = document.getElementById("saidaVetor")
const botaoInverter = document.getElementById("btnInverter")
const saidaInvertido = document.getElementById("saidaInvertido")
const vetor = []

function gerarVetor(array, tamanho){
    array.length = tamanho

    for(let i = 0; i < array.length; i++){
        let randomizador = Math.floor(Math.random() * 101);
        array[i] = randomizador
    }

    return array
}

function eventoGerarVetor(){
    const tamanho = Number (tamanhoVetor.value)
    gerarVetor(vetor, tamanho)

    const saida = "Vetor = [ " + vetor.join(` | `) + " ]"
    saidaVetor.innerHTML = saida

}
botaoGerar.addEventListener("click", eventoGerarVetor)

function inverterVetor(array){
    const pilha = new Pilha()
    for(let i = 0; i < array.length; i++){
        pilha.empilhar(array[i]) // aqui o objeto criado com a classe agora é uma pilha cheia que foi empilhada com os valores do vetor randomizado
    }

    let invertido = ""
    while(!pilha.estaVazia()){
       invertido += pilha.desempilhar()
    }

    return invertido
}

function eventoInverterVetor(){

    saidaInvertido.innerHTML = inverterVetor(vetor)
}

botaoInverter.addEventListener("click", eventoInverterVetor)