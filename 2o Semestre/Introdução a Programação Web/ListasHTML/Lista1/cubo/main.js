import { Cubo } from "./cubo.js";

const entradaAresta = document.getElementById("aresta")
const botao = document.getElementById("btnCalc")
const saida = document.getElementById("saida")

function calcularCubo(){
    const aresta = Number(entradaAresta.value)
    const cubo = new Cubo(aresta)

    const areaFace = cubo.areaFace()
    const areaLateral = cubo.areaLateral()
    const areaTotal = cubo.areaTotal()
    const volume = cubo.volume()

    saida.innerHTML = `Tipo da Figura: Cubo <br> Área da Face: ${areaFace} <br> Área Total: ${areaTotal} <br> Volume: ${volume}`

}
botao.addEventListener("click", calcularCubo)