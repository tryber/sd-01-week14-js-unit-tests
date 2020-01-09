const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('#primeFactors', () => {
  it('Aparecer mensagem de erro(Necessario passar um numero inteiro) Caso passe um valor não inteiro', () => {
    assert.throws(() => primeFactors(4.1), /Necessario passar um numero inteiro!/);
  });

  it('Fatores dos numeros', () => {
    assert.deepStrictEqual(primeFactors(15), [3, 5]);
    assert.deepStrictEqual(primeFactors(20), [2, 2, 5]);
    assert.deepStrictEqual(primeFactors(10), [2, 5]);
    assert.deepStrictEqual(primeFactors(5), [5]);
  });
});
