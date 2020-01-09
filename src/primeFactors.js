/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores primos desse parâmetro

  Por exemplo:

  - os fatores primos para o número 15 são [3, 5], pois:
    1) 3 * 5 = 15
    2) ambos 3 e 5 são números primos
  - os fatores primos para o número 9 são [3, 3], pois:
    1) 3 * 3 = 9
    2) 3, que aparece duas vezes, é um número primo
  - os fatores primos para o número 12 são [2, 2, 3], pois:
    1) 2 * 2 * 3 = 12
    2) 2, que aparece duas vezes, e 3 são números primos

  Para mais informações acerca de fatores primos, acesse esta página:
    -> https://pt.wikipedia.org/wiki/Fator_primo
*/

function isPrime(num) {
  for (let n = 2; n <= num; n += 1) {
    if (num !== n && num % n === 0) return false;
  }
  return true;
}

function primeValues(number) {
  const primeList = [];
  for (let num = 2; num <= number; num += 1) {
    primeList.push(num);
  }
  return primeList.filter(elm => isPrime(elm));
}

function addFactores(primeList, value) {
  return primeList.find(elm => value % elm === 0);
}

function primeFactors(number) {
  if (!Number.isInteger(number)) throw new Error('parameters must be integer numbers');
  const primeList = primeValues(number);
  const factors = [];
  let value = number;
  let count = 0;
  while (value > 1) {
    factors.push(addFactores(primeList, value));
    value /= factors[count];
    count += 1;
  }
  return factors;
}

module.exports = primeFactors;
