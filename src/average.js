/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  return params.reduce((averageOf, number) => averageOf + number / params.length, 0);
}

module.exports = average;
