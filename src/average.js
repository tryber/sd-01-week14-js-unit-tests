/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const notNumber = params.every(element=>typeof (element) === 'number')
  if(!notNumber) return undefined;
  return params.reduce((acc,element)=>{
   return acc+=element;
  })/params.length;
}

module.exports = average;
