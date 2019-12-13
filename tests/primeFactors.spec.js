const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(3), [6, 6]);
assert.deepEqual(primeFactors(5), [20, 60, 120, 120]);
assert.deepEqual(primeFactors(8), [56, 336, 1680, 6720, 20160, 40320, 40320]);
// assert.throws(primeFactors(5.4), 'Número não inteiro!');
assert.throws(() => primeFactors(5.4) , 'Número não inteiro!')

describe('#primeFactors', () => {
    it('expect return [3, 2, 1] until 3', () => {
        expect(primeFactors(3)).toStrictEqual([6, 6]);
    });
});
