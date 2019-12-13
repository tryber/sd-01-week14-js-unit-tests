const greeting = require('../src/greeting');

test('A função deve receber uma string e retornar a mensagem', () => {
  expect(greeting('Faraó')).toBe('Hello Faraó!');
});

test('Se nenhum parametro for passado, um erro deve ser lançado', () => {
  expect(greeting).toThrow('You must send something to greet!');
});

