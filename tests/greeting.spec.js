const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('Greeting', () => {
  test('must be a function', () => {
    expect(typeof (greeting)).toBe('function');
  });

  test('If receive a string return a message', () => {
    expect(greeting('Guilherme')).toBe('Hello Guilherme!');
    expect(greeting('Wellington')).toBe('Hello Wellington!');
  });

  test('If do not receive params return Error', () => {
    expect(greeting).toThrow('You must send something to greet!');
  });
});
