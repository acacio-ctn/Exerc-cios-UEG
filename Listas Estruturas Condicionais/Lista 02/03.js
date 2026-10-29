const prompt = require("prompt-sync")();

function formarTriangulo(l1,l2,l3){ 
    if ((l1+l2 > l3) && (l2+l3 > l1) && (l1+l3 > l2)){
        console.log("Forma um triângulo.")
        if ((l1==l2) && (l1==l3)){
            console.log("TRIÂNGULO EQUILÁTERO") 
        }else if ((l1==l2) && (l2!=l3) || ((l2==l3 && (l3!=l1))|| (l1==l3 && l1!=l2))){
            console.log("TRIÂNGULO ISÓSCELES")    
                    }else if ((l1!==l2) && (l1!==l3) && (l2!==l3)){
                        console.log("TRIÂNGULO ESCALENO")
                        }
                    }else{ 
                        console.log("Não forma um triângulo.")
                    }
}
        
    

let lado1 = Number (prompt("Informe o primeiro lado: "))
let lado2 = Number (prompt("Informe o segundo lado: "))
let lado3 = Number (prompt("Informe o terceiro lado: "))
let triangulo = formarTriangulo(lado1,lado2,lado3)