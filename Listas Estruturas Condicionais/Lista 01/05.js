const prompt = require("prompt-sync")();

function valorRaizes(coefA,coefB,coefC){
  let discriminante = Math.pow(coefB,2) - 4 * (coefA * coefC)
    if(discriminante < 0){
      console.log(`O valor de ${discriminante} configura Raízes Imaginárias.`)
    }else if(discriminante == 0){
      console.log(`O valor de ${discriminante} configura Raízes Únicas.`)
        }else{console.log(`O valor de ${discriminante} configura Raízes Distintas.`)
        }
}
let coeficienteA = Number(prompt("Informe o coeficiente A: "));
let coeficienteB = Number(prompt("Informe o coeficiente B: "));
let coeficienteC = Number(prompt("Informe o coeficiente C: "));
let delta = valorRaizes(coeficienteA,coeficienteB,coeficienteC)