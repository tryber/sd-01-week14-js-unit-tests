const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(3), [3, 2, 1]);
assert.deepEqual(primeFactors(5), [5, 4, 3, 2, 1]);
assert.deepEqual(primeFactors(8), [8, 7, 6, 5, 4, 3, 2, 1]);
// assert.throws(primeFactors(5.4), 'Número não inteiro!');
assert.throws(() => primeFactors(5.4) , 'Número não inteiro!')
