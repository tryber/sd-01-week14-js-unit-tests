const greeting = require('../src/greeting');

test('A função deve receber uma string ${param} e retornar a mensagem Hello ${param}!', () => {
  expect(greeting('Faraó')).toBe('Hello Faraó!');
});

test('Se nenhum parametro for passado, um erro deve ser lançado', () => {
  expect(greeting).toThrow('You must send something to greet!');
});

