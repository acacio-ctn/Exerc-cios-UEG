import { Esfera } from "./esfera.js";

const raioEntrada = document.getElementById("raio")
const botao = document.getElementById("btnCalc")
const saida = document.getElementById("saida")

function calcularEsfera(){
    const raio = Number(raioEntrada.value)
    const esfera = new Esfera(raio)

    const areaTotal = esfera.areaTotal()
    const volume = esfera.volume()
    const diametro = esfera.diametro()

    saida.innerHTML = `Tipo da Figura: Esfera <br> Área Total: ${areaTotal} <br> Volume: ${volume.toFixed(2)} <br> Diâmetro: ${diametro}`
}
botao.addEventListener("click", calcularEsfera)