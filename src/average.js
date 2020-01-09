/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

const average = (...arrayNumber) => {
  let media;
  if (typeof arrayNumber[0] === 'number') {
    media = arrayNumber.reduce((total, score) => total + score) / arrayNumber.length;
  } else {
    media = undefined;
  }
  return media;
};

module.exports = average;

//Teste
