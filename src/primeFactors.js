/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const array = [];
  if (!Number.isInteger(number)) throw new Error('Número não inteiro!');
  for(let index = number; index > 0; index--) {
    array.push(index);
  }
  return array;
}


module.exports = primeFactors;
