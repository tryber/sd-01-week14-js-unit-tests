const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('Recebe o último elemento do parâmetro.', () => {
    expect(last(["first", "second", "third"])).toBe("third");
  });

  it('Recebe uma string e retorna o último caractere.', () => {
    expect(last("abcde")).toBe("e");
  });
  
  it('Recebe vários parâmetros e retorna o último parâmetro.', () => {
    expect(last('a', 'b', 'c')).toBe('c');
  });
});
