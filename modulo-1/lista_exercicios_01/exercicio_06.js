const prompt = require("prompt-sync")();

console.log("Verificador de Triângulos");

const ladoA = parseFloat(prompt("Digite o valor do lado A: "));
const ladoB = parseFloat(prompt("Digite o valor do lado B: "));
const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

if (
  isNaN(ladoA) ||
  isNaN(ladoB) ||
  isNaN(ladoC) ||
  ladoA <= 0 ||
  ladoB <= 0 ||
  ladoC <= 0
) {
  console.log("Por favor, insira valores válidos para os lados do triângulo.");
} else if (
  ladoA < ladoB + ladoC &&
  ladoB < ladoA + ladoC &&
  ladoC < ladoA + ladoB
) {
  console.log("Os lados fornecidos formam um triângulo.");

  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo de triângulo: Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo de triângulo: Isósceles");
  } else {
    console.log("Tipo de triângulo: Escaleno");
  }
} else {
  console.log("Os lados fornecidos não formam um triângulo.");
}
