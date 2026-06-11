const prompt = require("prompt-sync")();

function verificarEleitor(valorIdade){
  if(valorIdade < 16){
    console.log("===NÃO ELEITOR===")
      }else if((valorIdade >= 18) && (valorIdade <= 65)){
        console.log("===ELEITOR OBRIGATÓRIO===")
          }else{((valorIdade >= 16) && (valorIdade < 18) || (valorIdade > 65))
            console.log("===ELEITOR FACULTATIVO===")
          }
  }
  let idade = Number (prompt("Digite a idade do eleitor: "))
  let tipoEleitor = verificarEleitor(idade)
  