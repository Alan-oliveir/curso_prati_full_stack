function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }
    acumulador[venda.cliente] += venda.total;
    return acumulador;
  }, {});
}

const prompt = require("prompt-sync")();
let vendas = [];

console.log("Informe as vendas. Digite 'fim' para encerrar.");

while (true) {
  let cliente = prompt("Nome do cliente: ");
  if (cliente.toLowerCase() === "fim") break;
  let total = Number(prompt("Valor da venda: "));
  vendas.push({ cliente: cliente.trim(), total: total });
}

console.log("Totais por cliente:");
const totaisPorCliente = agruparPorCliente(vendas);
for (const cliente in totaisPorCliente) {
  console.log(`${cliente}: ${totaisPorCliente[cliente]}`);
}
