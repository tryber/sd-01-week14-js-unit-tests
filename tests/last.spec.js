const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('expect last of 2, 4, 6 should be 6', () => {
    expect(last(2, 4, 6)).toBe(6);
  });
  it('expect last of 2, 4 should be 4', () => {
    expect(last(2, 4)).toBe(4);
  });
  it('expect last of feio should be o', () => {
    expect(last('feio')).toBe('o');
  });

  it('expect last of vovozinha should be a', () => {
    expect(last('vovozinha')).toBe('a');
  });
  it("expect last of ['cachorro', 'gato' 'rato'] should be a", () => {
    expect(last(['cachorro', 'gato', 'rato'])).toBe('rato');
  });
});
