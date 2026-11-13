function calculoAreaTriangulo(l1,l2,l3){
  let t = (l1+l2+l3) / 2 
  let area = Math.sqrt(t*(t-l1)*(t-l2)*(t-l3)) 
  return area
  }
  let lado1 = Number(prompt("Primeiro lado do triângulo: "));
  let lado2 = Number(prompt("Segundo lado do triângulo: "));
  let lado3 = Number(prompt("Terceiro lado do triângulo: "));
  let area = calculoAreaTriangulo(lado1,lado2,lado3);
  console.log(`A área do triângulo é de ${area.toFixed(2)}.`);