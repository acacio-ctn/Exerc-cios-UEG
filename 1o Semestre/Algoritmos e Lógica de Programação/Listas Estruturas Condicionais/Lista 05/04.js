const prompt = require("prompt-sync")();

function numeroCorrespondeBairro(bairro,numTelefone){
    let prefixo = Math.floor(numTelefone/10000)
    let verificacao
    if (!(bairro == "oeste" || bairro == "centro" || bairro == "sul" || bairro == "bueno" || bairro == "campinas")){
        console.log("Nome de bairro incorreto/não registrado.")
        return
    }
    if (!(prefixo == 3223 || prefixo == 3225 || prefixo == 3212 || prefixo == 3224 || prefixo == 3241 || prefixo == 3242 || prefixo == 3243 || prefixo == 3281 || prefixo == 3251 || prefixo == 3285 || prefixo == 3233 || prefixo == 3291)){
        console.log("Prefixo incorreto/não registrado.")
        return
    }
    if ((bairro == "oeste") && (prefixo == 3223 || prefixo == 3225 || prefixo == 3212)){
        verificacao = "VALIDO"
    }else if ((bairro == "centro") && (prefixo == 3223 || prefixo == 3224 || prefixo == 3212)){ 
        verificacao = "VALIDO"
    }else if ((bairro == "sul") && (prefixo == 3241 || prefixo == 3242 || prefixo == 3243 || 3281)){
        verificacao = "VALIDO"
    }else if ((bairro == "bueno") && (prefixo == 3251 || prefixo == 3285)){
        verificacao = "VALIDO"
    }else if ((bairro == "campinas") && (prefixo == 3233 || prefixo == 3291)){
        verificacao = "VALIDO" 
    }else{
        verificacao = "INVÁLIDO"
    }
    console.log(`A situação do número informado é: ${verificacao}`)
}
let nomeBairro = (prompt("Dígite o bairro de residência: "))
let telefone = Number (prompt("Digite o número de telefone: "))
let verificar = numeroCorrespondeBairro(nomeBairro,telefone)