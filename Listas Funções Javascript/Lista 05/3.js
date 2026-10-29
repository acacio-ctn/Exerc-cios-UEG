function calculoAreaCilindro (raioCilindro,alturaCilindro) {
  let area = 2 * Math.PI * raioCilindro * (alturaCilindro+raioCilindro)
  return area
}
  function calculoVolumeCilindro (raioCilindro,alturaCilindro) {
    let volume = Math.PI * Math.pow(raioCilindro,2) * alturaCilindro
    return volume
  }
    let raio = Number (prompt("Digite o valor de raio do cilindro: "));
    let altura = Number (prompt("Digite a altura do cilindro: "));
    let area = calculoAreaCilindro(raio,altura);
    let volume = calculoVolumeCilindro(raio,altura);
      console.log(`Area do cilindro: ${area.toFixed(2)}`);
      console.log (`Volume do cilindro: ${volume.toFixed(2)}`);