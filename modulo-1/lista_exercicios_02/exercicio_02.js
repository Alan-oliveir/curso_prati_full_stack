const prompt = require("prompt-sync")();

function jogoAdivinhacao() {
  const numeroLimite = 100;
  const numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1;
  let tentativas = 0;
  let acertou = false;

  console.log("Jogo do número secreto");
  console.log(`Tente adivinhar o número secreto entre 1 e ${numeroLimite}`);

  while (!acertou) {
    let chute = Number(prompt("Digite seu palpite: "));
    tentativas++;

    if (chute === numeroSecreto) {
      console.log(
        `Parabéns! Você acertou o número secreto em ${tentativas} tentativa(s).`
      );
      acertou = true;
    } else if (chute > numeroSecreto) {
      console.log("Mais baixo!");
    } else {
      console.log("Mais alto!");
    }
  }
}

// Para rodar o jogo:
jogoAdivinhacao();
