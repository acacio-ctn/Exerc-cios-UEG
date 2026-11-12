const entrada = document.getElementById("entrada")
const botao = document.getElementById("botao")

function classificar(){
    const idade = Number(entrada.value)
    const saida = document.getElementById("saida")
    let saidaF 
    if(idade < 16){
        saidaF = 'Não-Eleitor'
    }else if(idade >= 18 && idade <= 65){
        saidaF = 'Eleitor Obrigatório'
    }else if((idade >= 16 && idade <= 17) || idade > 65){
        saidaF = 'Eleitor Facultativo'
    }

    saida.innerHTML = saidaF
}

botao.addEventListener("click", classificar)