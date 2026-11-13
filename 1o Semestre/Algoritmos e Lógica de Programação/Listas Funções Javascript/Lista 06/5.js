function calculoValorDeterminanteMatriz(e11,e12,e21,e22){
  let determinante = (e11*e22) - (e12 * e21);
  return determinante
 }
let elemento11 = Number(prompt("Informe o primeiro elemento da coluna 1: "))
let elemento12 = Number (prompt("Informe o segundo elemento da coluna 1: "))
let elemento21 = Number (prompt("Informe o primeiro elemento da coluna 2: "));
let elemento22 = Number (prompt("Informe o segundo elemento da coluna 2: "));
let determinante = calculoValorDeterminanteMatriz(elemento11,elemento12,elemento21,elemento22);
  console.log(`O valor do determinante na matriz é de: ${determinante}.`);