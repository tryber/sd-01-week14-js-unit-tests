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

function primeFactors(number) {
  let num = number;
  if (!Number.isInteger(number)) throw new Error('Necessario passar um numero inteiro!');
  const arr = [];
  for (let cont = 2; num !== 1;) {
    if (num % cont === 0) {
      arr.push(cont);
      num = num / cont;
    } else {
      cont++;
    }
  }
  return arr;
}
module.exports = primeFactors;
