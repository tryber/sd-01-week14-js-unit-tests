const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('testa a função caller', () => {
  test('if caller passes a and b as arguments to fn', () => {
    const fn = jest.fn();
    const a = 'a';
    const b = 8;
    caller(fn,a,b)
    expect(fn).toHaveBeenCalledWith(a,b);
  });
});
