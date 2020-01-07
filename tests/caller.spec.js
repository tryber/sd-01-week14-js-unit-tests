const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado
const fn = (a, b) => a * b;

describe('#caller', () => {
  it('expect caller of fn, 4, 5 should be fn(4,5)', () => {
    expect(caller(fn, 2, 5)).toBe(10);
  });
  it('expect caller of fn, 4, 5 should be fn(4,5)', () => {
    expect(caller(fn, '2', 5)).toBe(10);
  });
  it('expect caller of fn, 4, 5 should be fn(4,5)', () => {
    expect(caller(fn, 2, '5')).toBe(10);
  });
});
