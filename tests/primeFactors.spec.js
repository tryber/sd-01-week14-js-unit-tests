const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
// describe('#primeFactors', () => {
//   it('expect primeFactors is number interger', () => {
//     expect(primeFactors('Douglas')).toBe('this is not a number');
//   });
// });

assert.deepStrictEqual(primeFactors(15), [3, 5]);
assert.deepStrictEqual(primeFactors(9), [3, 3]);
assert.deepStrictEqual(primeFactors(12), [2, 2, 3]);
assert.deepStrictEqual(primeFactors(5.5), 'this is not a number interger');
