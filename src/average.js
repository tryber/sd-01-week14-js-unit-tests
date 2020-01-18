/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  if (params === '') return undefined;
  const sum = params.reduce((total, each) => total + each, 0);
  return sum / params.length;
}

module.exports = average;
