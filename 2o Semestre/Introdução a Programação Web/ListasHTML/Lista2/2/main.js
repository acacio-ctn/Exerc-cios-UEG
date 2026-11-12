const input1 = document.getElementById("a")
const input2 = document.getElementById("b")
const input3 = document.getElementById("c")
const botao = document.getElementById("botao")

function calcular(){
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const saida = document.getElementById("saida")
    let saidaF = ''

    let delta = Math.pow(b, 2) - 4 * a * c

    if(delta > 0){
        saidaF = 'RAÍZES DISTINTAS'
    }else if(delta == 0){
        saidaF = 'RAÍZES REAIS'
    }else{
        saidaF = 'RAÍZES IMAGINÁRIAS'
    }
    saida.innerHTML = `Resultado = ${delta} <br><br> ${saidaF}`
}

botao.addEventListener("click", calcular)