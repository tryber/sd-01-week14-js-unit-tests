const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('#primeFactors', () => {
  it('if appear a error, the message (you must send a integer) must appear', () => {
    assert.throws(() => { primeFactors(3.14); }, /Error: you must send a integer/);
  });

  it('factors of numbers', () => {
    assert.deepStrictEqual(primeFactors(3), [3]);
    assert.deepStrictEqual(primeFactors(6), [2, 3]);
    assert.deepStrictEqual(primeFactors(12), [2, 2, 3]);
    assert.deepStrictEqual(primeFactors(60), [2, 2, 3, 5]);
  });
});
