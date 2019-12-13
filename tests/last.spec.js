const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('Last', ()  => {
  test('must be a function', () => {
    expect(typeof(last)).toBe('function')
  });

  describe('If receive a list', () => {
    test('must return the last element', () => {
      expect(last([1, 6, 4, 9, 7, 3])).toBe(3);
      expect(last(['a', 'b', 'c'])).toBe('c');
    });
  });

  describe('If receive a string', () => {
    test('must return the last character', () => {
      expect(last('testando')).toBe('o');
      expect(last('guilherme')).toBe('e');
    });
  });

  describe('If receive multiple params', () => {
    test('must return the last parameter', () => {
      expect(last(1, 2)).toBe(2);
      expect(last('a', 'f', 'b', 'i', 'p')).toBe('p');
    });

    test('must return the last element of the last parameter', () => {
      expect(last(1, 4, 7, [6, 5, 4, 3])).toBe(3);
      expect(last('a', 'b', 'c', ['x', 'y', 'z'])).toBe('z');
    });
  });
});