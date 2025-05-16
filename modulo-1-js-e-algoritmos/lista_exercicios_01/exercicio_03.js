const prompt = require("prompt-sync")();

const nota = parseFloat(prompt("Digite a nota (0 a 10): "));

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Por favor, insira uma nota válida entre 0 e 10.");
} else if (nota >= 7) {
  console.log("Classificação: Aprovado");
} else if (nota > 3 && nota < 7) {
  console.log("Classificação: Recuperação");
} else {
  console.log("Classificação: Reprovado");
}
