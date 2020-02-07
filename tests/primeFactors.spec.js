const primeFactors = require('../src/primeFactors');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('tests if function is delivering prime factors correctly', () => {
  it('prime factors of 100', () => {
    expect(primeFactors(100)).toContainEqual(1, 2, 5);
  });

  it('prime factors of 200', () => {
    expect(primeFactors(200)).toContainEqual(1, 2, 4, 5);
  });
});
