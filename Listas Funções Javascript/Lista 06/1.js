function calculoBatidasCoracao(idade) {
  let dias = idade * 365.25
  let horas = dias * 24
  let minutos = horas * 60
  let segundos = minutos * 60
  return segundos
}
  let idadeAnos = Number (prompt("Digite sua idade: "));
  let batidasCoracao = calculoBatidasCoracao(idadeAnos);
  console.log(`Seu coração já bateu ${batidasCoracao} vezes! `)