const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('#primeFactors', () => {
    it('factors of numbers', () => {
        expect(primeFactors(4)).toStrictEqual([4, 12, 24]);
    });
});

assert.throws(() => { primeFactors(3.14) }, /^Error: you must send a integer/);
assert.deepStrictEqual(primeFactors(3), [3, 6]);
