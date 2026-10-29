const prompt = require("prompt-sync")();

function calculoTarifaBancaria(name,numeroConta,valorSaldoSemestral){
  let saldoMensal = valorSaldoSemestral / 6 
  if (saldoMensal <= 1000){ 
    console.log(`Nome do cliente: ${name}`);
    console.log(`Dígito da conta: ${numeroConta}`)
    console.log(`Tárifa Bancária: BÁSICA - R$25,00`)
    }else if ((saldoMensal >= 1000.01) && (saldoMensal <= 2000)){ 
      console.log(`Nome do cliente: ${name}`);
      console.log(`Dígito da conta: ${numeroConta}`);
      console.log(`Tárifa Bancária: PRATA - R$20,00`)
    }else if ((saldoMensal >= 2000.01) && (saldoMensal <= 3500)){ 
          console.log(`Nome do cliente: ${name}`);
          console.log(`Dígito da conta: ${numeroConta}`)
          console.log(`Tárifa Bancária: OURO - R$13,00`) 
    }else{
            console.log(`Nome do cliente: ${name}`);
            console.log(`Dígito da conta: ${numeroConta}`)
            console.log(`Tárifa Bancária: ISENTA.`)
    } 
  }

let nome = (prompt("Digite seu nome: "));
let digito = Number (prompt("Informe o dígito da conta: "));
let saldoSemestral = Number (prompt("Dígite o seu saldo semestral: "));
let calculo = calculoTarifaBancaria(nome,digito,saldoSemestral)