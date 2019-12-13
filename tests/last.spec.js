const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('A função deve retornar o último elemento do parâmetro passado', () => {
    expect(last('a',['b','c'])).toBe('c');
  });

  it('Se a função receber uma lista, deve retornar o último elemento', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
  });

  it('Se a função receber uma string, deve retornar o último caractere', () => {
    expect(last('wilson')).toBe('n');
    expect(last('wilson')).toBe('n');
  });

  it('Se a função receber vários parâmetros, deve retornar o último parâmetro', () => {
    expect(last(['ola', 'wilson'], 'bobo', true, 4, false)).toBe(false);
    expect(last(false)).toBe(false);
  });
});
