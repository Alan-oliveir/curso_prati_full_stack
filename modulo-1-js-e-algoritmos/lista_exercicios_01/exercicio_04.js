const prompt = require("prompt-sync")();

console.log("Menu Interativo:");
console.log("1. Iniciar atendimento");
console.log("2. Falar com o atendente");
console.log("3. Encerrar atendimento");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
  case "1":
    console.log("Olá! Como posso ajudar você hoje?");
    break;
  case "2":
    console.log(
      "Por favor, aguarde um momento enquanto conectamos você a um atendente."
    );
    break;
  case "3":
    console.log("Encerrando... Obrigado por usar nosso serviço!");
    break;
  default:
    console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
    break;
}
