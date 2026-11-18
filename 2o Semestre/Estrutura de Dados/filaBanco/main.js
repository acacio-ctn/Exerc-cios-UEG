import { Fila } from "./fila.js"

const btnIncluir = document.getElementById("btnIncluir")
const btnRetirar = document.getElementById("btnRetirar")
const btnAcessar = document.getElementById("btnAcessar")
const entrada = document.getElementById("entrada") 
const fila = new Fila()

function exibirFila(){
    const saida = document.getElementById("saidaMostrarFila")

    saida.innerHTML = fila.obterDadosFila()
}

exibirFila()

function incluirNaFila(){
    const texto = entrada.value
    const saida = document.getElementById("saidaMostrarFila")

    fila.enfileirar(texto) // incluiu na fila

    saida.innerHTML = fila.obterDadosFila()
}

function retirarDaFila(){
    const saida = document.getElementById("saidaMostrarFila")

    try{ 
    fila.desenfileirar()

    saida.innerHTML = fila.obterDadosFila()
    }catch(Error){
        saida.innerHTML = Error.message
    }
}

function acessarPrimeiro(){
    const saida = document.getElementById("saidaPrimeiroFila")
    try { 
    saida.innerHTML = `Primeiro da Fila: ${fila.acessar()}`
    }catch(Error){
        saida.innerHTML = Error.message
    }
}

btnIncluir.addEventListener("click", incluirNaFila)
btnRetirar.addEventListener("click", retirarDaFila)
btnAcessar.addEventListener("click", acessarPrimeiro)