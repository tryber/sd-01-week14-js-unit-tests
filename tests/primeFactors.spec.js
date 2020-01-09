const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('#primeFactors', () => {
  it('should print the prime factor numbers of the integer 3', () => {
    expect(primeFactors(3)).toStrictEqual([3]);
  });

  it('should print the prime factor numbers of the integer 6', () => {
    expect(primeFactors(6)).toStrictEqual([2, 3]);
  });

  it('should print the prime factor numbers of the integer 9', () => {
    expect(primeFactors(9)).toStrictEqual([3, 3]);
  });

  it('should print the prime factor numbers of the integer 60', () => {
    expect(primeFactors(60)).toStrictEqual([2, 2, 3, 5]);
  });

  it('throw Error Message if do not receive an integer', () => {
    expect(primeFactors).toThrow('You must pass an integer!');
  });
});
