const n = document.getElementById("nome")
const numero = document.getElementById("num")
const s = document.getElementById("saldo")
const botao = document.getElementById("botao")

function enquadrar(){
    const nome = n.value
    const nConta = Number(numero.value)
    const saldo = Number(s.value)
    const saida = document.getElementById("saida")
    let tarifa = ''
    if(saldo <= 1000){
        tarifa = 'Tarifa = R$25,00'
    }else if(saldo >= 1001.01 && saldo <= 2000){
        tarifa = 'Tarifa = R$20,00'
    }else if(saldo >= 2000.01 && saldo <= 3500){
        tarifa = 'Tarifa = R$13,00'
    }else{
        tarifa = 'Tarifa Isenta'
    }
    saida.innerHTML = `Nome: ${nome} <br><br> Número da conta: ${nConta} <br><br> ${tarifa}`
}
botao.addEventListener("click", enquadrar)