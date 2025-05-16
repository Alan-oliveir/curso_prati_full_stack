const prompt = require("prompt-sync")();

const idade = parseInt(prompt("Digite a idade da pessoa: "));

if (isNaN(idade) || idade < 0) {
  console.log("Por favor, insira uma idade válida.");
} else if (idade <= 12) {
  console.log("Categoria: Criança");
} else if (idade <= 17) {
  console.log("Categoria: Adolescente");
} else if (idade <= 64) {
  console.log("Categoria: Adulto");
} else {
  console.log("Categoria: Idoso");
}
