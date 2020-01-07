/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const primeList = [];
  let bolean = true;
  if (!Number.isInteger(number)) throw new Error('parameters must be integer numbers');
  for (let num = 2; num <= number; num += 1) {
    bolean = true;
    let div = 2;
    while (div < num) {
      if (num % div === 0) {
        bolean = false;
      }
      div += 1
    }
    if (bolean) {
      primeList.push(num);
    }
  }
  return primeList;
}

module.exports = primeFactors;
