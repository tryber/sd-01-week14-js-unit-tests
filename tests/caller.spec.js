const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

function fn(a, b) {
  return a + b;
}

describe('#caller', () => {
  it('The fn is a function', () => {
    expect(typeof fn).toBe('function');
  });

  it('The return of sum 2 and 3 is 5', () => {
    expect(caller(fn, 2, 3)).toBe(5);
  });
});
