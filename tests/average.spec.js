const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
  it('expect average of 16, 32, 64, 128, 256, 512 should be 168', () => {
    expect(average(16, 32, 64, 128, 256, 512)).toBe(168);
  });
  it('expect average of 333, 666, 999, 1332 should be 832.5', () => {
    expect(average(333, 666, 999, 1332)).toBe(832.5);
  });
  it('expect average of 396, 113 should be 254.5', () => {
    expect(average(396, 113)).toBe(254.5);
  });
  it('expect function returns undefined for params 1995, idade, 2020, 24, anos', () => {
    expect(average(1995, 'idade', 2020, 24, 'anos')).toBe(undefined)
  });
});
