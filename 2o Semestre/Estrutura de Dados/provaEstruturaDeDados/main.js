import { Pilha } from "./pilha.js";

const tamanhoVetor = document.getElementById('tamanhoVetor')
const btnGerar = document.getElementById('btnGerar')
const btnInverter = document.getElementById('btnInverter')
const array = []
const arrayInverso = []

const pilha = new Pilha()

function randomizarVetor(){
    const tamanho = Number(tamanhoVetor.value)
    const saida = document.getElementById('saidaVetor')
    array.length = tamanho
    for(let i = 0; i < array.length; i++){
        let randomizador = Math.floor((Math.random() * 101))
        array[i] = randomizador
    }

    for(let i = 0; i < array.length; i++){
        pilha.empilhar(array[i]) 
    }

    saida.innerHTML = `Vetor: [ ` + array.join(` | `) + ` ]`

}
btnGerar.addEventListener("click", randomizarVetor)

function inverterVetor(){
    const saida = document.getElementById('saidaInvertido')

     for(let i = 0; !pilha.estaVazia(); i++){
        let elemento = pilha.desempilhar()

        arrayInverso[i] = elemento
     }

    saida.innerHTML = 'Vetor Invertido: [ ' + arrayInverso.join(' | ') + ' ]'
}
btnInverter.addEventListener("click", inverterVetor)


