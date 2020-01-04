/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const int = parseInt(number, 10);
  let multi = number;
  const list = [];
  if (int !== number) {
    throw new Error('you must send a integer');
  }
  for (let index = number - 1; index >= 1; index -= 1) {
    list.push(multi);
    multi *= index;
  }
  return list;
}

module.exports = primeFactors;
