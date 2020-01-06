const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado
const fn = (a, b) => a + b;

describe('#caller', () => {
  it('expect return of params fn, 10, 5 should be 15', () => {
    expect(caller(fn, 10, 5)).toBe(15);
  });
  it('expect return of params fn, string, top, should be stringtop', () => {
    expect(caller(fn, 'string', 'top')).toBe('stringtop');
  });
});
