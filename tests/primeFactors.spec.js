const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('Error Test', () => {
  test('Show error when number is not integer', () => {
    assert.throws(() => primeFactors(9.7), /Este número não é inteiro!/);
  });
})

describe('Prime Factors List', () => {
  test('Testando se os fatores primos do número 1048 são 2 e 7.', () => {
    assert.deepStrictEqual(primeFactors(14), [2, 7]);
    console.log('Certo!');
  });
  test('Testando se os fatores primos do número 1048 são 2, 2, 2 e 131.', () => {
    assert.deepStrictEqual(primeFactors(1048), [2, 2, 2, 131]);
  });
  test('Testando se os fatores primos do número 2020 são 2,2,5,101', () => {
    assert.deepStrictEqual(primeFactors(2020), [2, 2, 5, 101]);
  });
});
