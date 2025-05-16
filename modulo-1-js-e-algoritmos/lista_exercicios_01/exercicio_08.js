const prompt = require("prompt-sync")();

console.log("Ordenador de Valores");

const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Por favor, insira valores numéricos válidos.");
} else if (valor1 === valor2) {
  console.log("Os valores não podem ser iguais. Tente novamente.");
} else if (valor1 < valor2) {
  console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else {
  console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}
