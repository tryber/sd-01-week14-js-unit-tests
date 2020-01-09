const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(5), [20, 60, 120, 120]);
assert.throws(() => primeFactors(2.1), /Não é um número inteiro!/);

describe('#primeFactors', () => {
    it('expect prime factor 3', () => {
        expect(primeFactors(3)).toStrictEqual([6, 6]);
    });
});
