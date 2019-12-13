/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

const average = (...values) => {
  let answer;
  if (typeof values[0] === 'number') {
    answer =
      values.reduce((argumento, value) => argumento + value) / values.length;
  } else {
    answer = undefined;
  }
  return answer;
};

module.exports = average;
