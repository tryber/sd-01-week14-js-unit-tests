const last = require('../src/last');

test('Se a função receber uma lista, deve retornar o último elemento', () => {
  expect(last([1, 4, 7, 9])).toBe(9);
});

test('Se a função receber uma string, deve retornar o último caractere', () => {
  expect(last('trybe')).toBe('e');
});

test('Se a função receber vários parâmetros, deve retornar o último parâmetro', () => {
  expect(last('Turisas', 17, 13, ['Sabaton', 1966, 'Arch Enemy'],'José')).toBe('é');
});
