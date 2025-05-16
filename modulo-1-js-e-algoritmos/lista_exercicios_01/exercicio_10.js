const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
  console.log("Por favor, insira um número inteiro válido.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${numero}`);
  }
}
