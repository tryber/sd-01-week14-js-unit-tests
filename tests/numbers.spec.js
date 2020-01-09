const numbers = require('../src/numbers');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o valor true se todos os elementos forem do tipo Number
// A função deve retornar o valor false se algum elemento não for do tipo Number

describe('#numbers', () => {
  it('expect truth value for all numbers parameters', () => {
    expect(numbers(1, 4, 3, 2, 5)).toBeTruthy();
    expect(numbers(1, 4.5, NaN)).toBeTruthy();
  });

  it('expect falsy value for no numbers parameters', () => {
    expect(numbers(1, 'urexplored', 3)).toBeFalsy();
    expect(numbers(1, 3, undefined)).toBeFalsy();
  });
});
