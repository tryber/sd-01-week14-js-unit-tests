const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
    expect(average(3)).toBe(3);
    expect(average(3.5, 4.2, 5)).toBe(4.23);
    expect(average(4.5, 4.5, 6)).toBe(5);
  });
  it('expect avarege of a non number should be undefined', () => {
    expect(average(3, 2, null, 5)).toBe(undefined);
    expect(average(3, [2, 2], 1, 5)).toBe(undefined);
    expect(average({ taylor: 'swift' }, 2, 0, 5)).toBe(undefined);
    expect(average(3, 2, undefined, 5)).toBe(undefined);
    expect(average(3, 10, '25', 5)).toBe(undefined);
  });
});
