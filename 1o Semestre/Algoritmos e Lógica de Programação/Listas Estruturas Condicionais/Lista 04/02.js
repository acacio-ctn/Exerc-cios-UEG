const prompt = require ("prompt-sync")();

function calculoGeometria(digitObjeto,valorR,valorA){
    let volume
    let area
    switch (digitObjeto){
        case (1):
            volume = ((Math.PI * Math.pow(valorR,2)) * valorA) / 3
            area = (Math.PI * valorR) * Math.sqrt(Math.pow(valorR,2) + Math.pow(valorA,2))
            break
                case (2):
                    volume = Math.PI * Math.pow(valorR,2) * valorA
                    area = (2 * Math.PI) * valorR * valorA
                    break
                        case (3):
                            volume = (4/3) * Math.PI * Math.pow(valorR,3)
                            area = (4 * Math.PI) * Math.pow(valorR,2)
                            break
                                default:
                                     return
    }
    console.log(`Volume : ${volume.toFixed(2)}m³`)
    console.log(`Área: ${area.toFixed(2)}m²`)
}
let digito = Number (prompt("Informe o dígito da figura a ser calculada (1-Cone Reto/2-Cilindro/3-Esfera): "));
if ((digito >= 1 && digito <= 3)){
    let raio = Number (prompt("Informe o valor de raio da figura(Em metros): "));
    let altura = Number (prompt("Informe o valor de altura da figura(Em metros): "))
    let formula = calculoGeometria(digito,raio,altura)
}else{console.log("Dígito Inexistente/Não registrado.") }
