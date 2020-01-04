const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

test('A função deve receber uma string ${param} e retornar a mensagem Hello {param}!', () => {
  expect(greeting('World')).toBe('Hello World!');
});

test('Se nenhum parâmetro for passado um erro deve ser lançado', () => {
  expect(greeting).toThrow('You must send something to greet!');
});

