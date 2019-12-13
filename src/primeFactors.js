/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const array = [];
  for(let index = number; index > 0; index--) {
    array.push(index);
  }
  return array;
}


console.log(primeFactors(8));
module.exports = primeFactors;
