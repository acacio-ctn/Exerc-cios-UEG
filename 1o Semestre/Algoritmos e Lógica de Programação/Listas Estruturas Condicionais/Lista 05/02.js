const prompt = require("prompt-sync")();

function determinarTriangulo(l1,l2,l3){
    let triangulo
    if ((l1 + l2 > l3) && (l1 + l3 > l2) && (l2 + l3 > l1)){

    if (Math.pow(l1,2) == (Math.pow(l2,2) + Math.pow(l3,2))){ 
        triangulo = "Retângulo"
            }else if (Math.pow(l1,2) > ((Math.pow(l2,2)) + Math.pow(l3,2))){ 
                triangulo = "Obtusângulo"
                }else if (Math.pow(l1,2) < (Math.pow(l2,2) + Math.pow(l3,2))){ 
                    triangulo = "Acutângulo"
                        }else{console.log("Não formam um triângulo.")}
    }
console.log(`Tipo de triângulo: ${triangulo}`)
}
let A = Number (prompt("Informe o primeiro lado: "))
let B = Number (prompt("Informe o segundo lado: "));
let C = Number (prompt("Informe o terceiro lado: "));
let verificarTipo = determinarTriangulo(A,B,C)