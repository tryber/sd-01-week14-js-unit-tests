/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

const average = (...arrayNumber) => arrayNumber.reduce((total, score) => total + score) / arrayNumber.length;

module.exports = average;
