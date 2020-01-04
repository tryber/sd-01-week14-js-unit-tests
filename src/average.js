/*
função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const number = params.every(param => typeof param === 'number');
  if (number === false) {
    return undefined
  } else {
    let medium = params.reduce((accumulator, currentValue) => accumulator + currentValue);
    return (medium/params.length)
  }
}

module.exports = average;
