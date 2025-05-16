const prompt = require("prompt-sync")();

const input = prompt("Digite um número inteiro: ");
const numero = parseInt(input);

if (isNaN(numero)) {
  console.log("Por favor, insira um número válido.");
} else if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}
