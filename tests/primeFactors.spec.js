const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
describe('#primeFactors', () => {
  it('expect primeFactors is number interger', () => {
    expect(primeFactors('Douglas')).toBe('this is not a number');
  });
});

assert.deepStrictEqual(primeFactors(10), [
  10,
  20,
  60,
  240,
  1200,
  7200,
  50400,
  403200,
  3628800,
]);
assert.deepStrictEqual(primeFactors(6), [6, 12, 36, 144, 720]);
assert.deepStrictEqual(primeFactors(3), [3, 6]);
assert.deepStrictEqual(primeFactors(7), [7, 14, 42, 168, 840, 5040]);
