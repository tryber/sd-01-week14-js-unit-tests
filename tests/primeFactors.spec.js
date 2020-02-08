const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
describe('tests if function is delivering prime factors correctly', () => {
  it('returns prime factors correctly', () => {
    assert.deepEqual(primeFactors(100), [2, 2, 5, 5]);

    assert.deepEqual(primeFactors(200), [2, 2, 2, 5, 5]);

    assert.deepEqual(primeFactors(9), [3, 3]);

    assert.deepEqual(primeFactors(13), [13]);

    assert.deepEqual(primeFactors(900), [2, 2, 3, 3, 5, 5]);
  });

  it('assures only integers are processed', () => {
    assert.deepEqual(primeFactors(3.2), 'This number is not an integer');

    assert.deepEqual(primeFactors(4 / 5), 'This number is not an integer');
  });
});
