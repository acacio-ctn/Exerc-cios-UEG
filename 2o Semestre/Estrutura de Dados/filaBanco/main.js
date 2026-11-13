import { Fila } from "./fila.js"

const btnIncluir = document.getElementById("btnIncluir")
const btnRetirar = document.getElementById("btnRetirar")
const btnAcessar = document.getElementById("btnAcessar")
const entrada = document.getElementById("entrada") 
const fila = new Fila()

function incluirNaFila(){
    const texto = entrada.value
    const saida = document.getElementById("saidaMostrarFila")

    fila.enfileirar(texto) // incluiu na fila

    saida.innerHTML = fila.obterDadosFila()
}

function retirarDaFila(){
    const saida = document.getElementById("saidaMostrarFila")

    fila.desenfileirar()

    saida.innerHTML = fila.obterDadosFila()
}

function acessarPrimeiro(){
    const saida = document.getElementById("saidaPrimeiroFila")
    saida.innerHTML = `Primeiro da Fila: ${fila.acessar()}`
}

btnIncluir.addEventListener("click", incluirNaFila)
btnRetirar.addEventListener("click", retirarDaFila)
btnAcessar.addEventListener("click", acessarPrimeiro)