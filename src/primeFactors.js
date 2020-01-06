/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const array = [];
  let totalValue = number;
  if (!Number.isInteger(number)) throw new Error('Número não inteiro!');
  for (let index = number - 1; index > 0; index -= 1) {
    array.push(totalValue *= index);
  }
  return array;
}

module.exports = primeFactors;
