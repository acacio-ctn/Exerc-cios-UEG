import { Paralelepipedo } from "./paralelepipedo.js";

const comprimento = document.getElementById("comprimento")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")
const botao = document.getElementById("btnCalc")
const saida = document.getElementById("saida")
function calcularParalelepipedo(){
    const c = Number(comprimento.value)
    const l = Number(largura.value)
    const h = Number(altura.value)

    const p = new Paralelepipedo(c,l,h)

    const areaTotal = p.areaTotal()
    const volume = p.volume()
    const diagonal = p.diagonal()

    saida.innerHTML = `Tipo da Figura: Paralelepipedo <br> Área total: ${areaTotal} <br> Volume: ${volume} <br> Diagonal: ${diagonal.toFixed(2)}`
}
botao.addEventListener("click", calcularParalelepipedo)