/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function isPrime(num) {
  for (let n = 2; n <= num; n += 1) {
    if (num !== n && num % n === 0) return false;
  }
  return true;
}

function primeFactors(number) {
  const primeList = [];
  if (!Number.isInteger(number)) throw new Error('parameters must be integer numbers');
  for (let num = 2; num <= number; num += 1) {
    primeList.push(num);
  }
  return primeList.filter(elm => isPrime(elm));
}

module.exports = primeFactors;
