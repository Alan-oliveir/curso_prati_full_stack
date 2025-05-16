const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número para ver sua tabuada: "));

if (isNaN(numero)) {
  console.log("Por favor, insira um número.");
} else {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
