
const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepStrictEqual(primeFactors(0) ,[]);
assert.deepStrictEqual(primeFactors(2), [2]);
assert.deepStrictEqual(primeFactors(4), [2, 3]);
assert.deepStrictEqual(primeFactors(10), [2, 3, 5, 7]);
assert.throws(primeFactors(4.5), /Error: parameters must be integer numbers/);
