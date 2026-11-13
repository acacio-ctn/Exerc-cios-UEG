const prompt = require ("prompt-sync")();

function calculoDosagem(digitoPaciente){ 
    let gotas = 14  // OBS: Sempre opte por criar variaveis para guardar valores necessário para um calculo que será repetido em todos os casos pois isso evita repetição desnecessária do código. O que em ambiente profissionais de devs facilita a edição de códigos em casos de mudanças em alguma regra em um programa que realiza calculos com base em uma formula pronta e não em um input do usuário.
    let dosagem = 400
    let dosagemMG = 0 // declaramos uma variavel aqui com valor 0 e apenas a atualizamos dentro de cada case com o valor atribuido ao digito informado no exercício
    switch (digitoPaciente){
    case (1):
        dosagemMG = 600
        break;
            case (2):
                dosagemMG = 1600
                break
                    case (3):
                        dosagemMG = 4600
                        break;
                            case (4): dosagemMG = 2450
                            break
                                default: 
                                    console.log("Usuário não registrado/inexistente.")
                                    return
}
let valorGotas = (dosagemMG * gotas) / dosagem // declarar o calculo unico e o console.log após a chave do switch para garantir que a escolha já foi feita
console.log(`A dosagem é de ${dosagemMG}mg ou seja ${valorGotas} gotas.`)
}
let digito = Number (prompt("Informe o dígito para o tipo de paciente (1-Bebê/2-Adolescente/3-Adulto/4-Idoso): "))
let dosagemPaciente = calculoDosagem(digito)