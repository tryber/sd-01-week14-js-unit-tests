const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });

  it('expect average of 3, 4, 5, 6, 7, 8 should be 5,5', () => {
    expect(average(3, 4, 5, 6, 7, 8)).toBe(5.5);
  });

  it('expect average of 10, 20 should be 15', () => {
    expect(average(10, 20)).toBe(15);
  });

  it("expect average of 3, 'ola', 5 should be undefined", () => {
    expect(average(3, 'ola', 5)).toBe(undefined);
  });
});
