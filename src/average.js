/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  for (param of params) {
    if (typeof param !== 'number') {
      return undefined;
    }
  }
  const sum = params.reduce((total, each) => total + each, 0);
  return sum / params.length;
}

module.exports = average;
