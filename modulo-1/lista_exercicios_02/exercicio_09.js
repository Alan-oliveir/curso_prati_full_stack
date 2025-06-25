function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

// Exemplos de uso:
const pares = [
  ["nome", "Alan"],
  ["idade", 30],
  ["cidade", "Nilopolis"],
];

const obj = paresParaObjeto(pares);
console.log("Objeto convertido a partir de pares:");
console.log(obj); // { nome: 'Alan', idade: 30, cidade: 'Nilopolis' }

const paresConvertidos = objetoParaPares(obj);
console.log("Pares convertidos a partir do objeto:");
console.log(paresConvertidos); // [ [ 'nome', 'Alan' ], [ 'idade', 30 ], [ 'cidade', 'Nilopolis' ] ]
