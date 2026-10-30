import { Cilindro } from "./cilindro.js"

const entradaRaio = document.getElementById("raio")
const entradaAltura = document.getElementById("altura")
const botao = document.getElementById("btnCalc")
const saida = document.getElementById("saida")

function calcularCilindro(){
    const raio = Number(entradaRaio.value)
    const altura = Number(entradaAltura.value)
    const cilindro = new Cilindro(raio,altura)
    const areaLateral = cilindro.areaLateral()
    const areaTotal = cilindro.areaTotal()
    const volume = cilindro.volume()

    saida.innerHTML = `Tipo da Figura: Cilindro <br> Área Lateral: ${areaLateral} <br> Área Total: ${areaTotal} <br> Volume: ${volume}`
}
botao.addEventListener("click", calcularCilindro)
