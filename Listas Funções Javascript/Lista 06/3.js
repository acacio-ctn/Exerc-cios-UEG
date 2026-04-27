function chuvaPolegadasparaMilimetros(chuvaPolegadas) {
  let chuvaMilimetros = chuvaPolegadas * 25.4
  return chuvaMilimetros
  }
  let chuva = (prompt("Digite o valor da chuva em polegadas: "));
  let chuvaMilimetros = chuvaPolegadasparaMilimetros(chuva)
  console.log (`A chuva é de ${chuvaMilimetros.toFixed(2)}mm`)

