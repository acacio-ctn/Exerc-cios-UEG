function celsiusParaFahrenheit(grausCelsius) {
  let formulaF = 9/5 * grausCelsius + 32
  return formulaF
}
 let grausC = Number (prompt("Digite a temperatura em Celsius: "));
 let conversaoParaF = celsiusParaFahrenheit(grausC);
 console.log(`A temperatura é de ${conversaoParaF}°F`);