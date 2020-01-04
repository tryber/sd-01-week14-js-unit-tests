/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const isNumberOrNot = params.every(element => typeof element === 'number')
  if (isNumberOrNot) {
    return params.reduce((averageOf, number) => averageOf + number / params.length, 0);
  } else {
    return undefined;
  }
}

module.exports = average;
