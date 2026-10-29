import { Cone } from "./cone.js";

const entradaRaio = document.getElementById("raio")
const entradaAltura = document.getElementById("altura")
const botao = document.getElementById("btnCalc")
const saida = document.getElementById("saida")

function calcularCone(){
    const raio = Number(entradaRaio.value)
    const altura = Number(entradaAltura.value)  

    const cone = new Cone(raio,altura)

    const geratriz = cone.geratriz()
    const areaLateral = cone.areaLateral()
    const areaTotal = cone.areaTotal()
    const volume = cone.volume()

    saida.innerHTML = `Geratriz: ${geratriz.toFixed(2)} <br> Área Lateral: ${areaLateral.toFixed(2)} <br> Área Total: ${areaTotal.toFixed(2)} <br> Volume: ${volume.toFixed(2)} <br> Tipo da figura: Cone`
}
botao.addEventListener("click", calcularCone)
