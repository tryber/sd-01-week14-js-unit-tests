const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('primeFactors', () => {
  it('Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado', () => {
    assert.throws(() => { primeFactors(7.04); }, /Error: O número precisa ser um Inteiro!/);
  });
  it('A função recebe um inteiro e retorna a lista com os fatores desse número', () => {
    assert.deepStrictEqual(primeFactors(3), [3]);
    assert.deepStrictEqual(primeFactors(6), [2, 3]);
    assert.deepStrictEqual(primeFactors(12), [2, 2, 3]);
  });
});
