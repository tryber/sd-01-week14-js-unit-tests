const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

test('last value', () => {
  expect(last(["first", "medium", "last"])).toBe("last");
});

test('last caracter', () => {
  expect(last("parent")).toBe("t");
});

// test('last param', () => {
//   expect(last("first", "medium", "last")).toBe("last");
// });

