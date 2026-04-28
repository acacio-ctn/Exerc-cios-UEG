const prompt = require("prompt-sync")();

function comissaoVendas(fixo,qtLCD,qtLED,qtPlasma){
    let tvLCD = qtLCD * 50
        let tvLED = qtLED * 60
            let tvPlasma = qtPlasma * 55
    let comissao = tvLCD + tvLED + tvPlasma
    let salario = fixo + comissao
}
let salario = Number(prompt("Informe o salário: "))
let lcd = Number(prompt("Dígite quantas TVs LCD foram vendidas: "))
let led = Number(prompt("Dígite quantas TVs LED foram vendidas: "))
let plasma = Number(prompt("Dígite quantas TVs de plasma foram vendidas: "))
let salFinal = comissaoVendas(salario,lcd,led,plasma)