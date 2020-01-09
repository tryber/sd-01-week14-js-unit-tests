const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  test('expect an arguments', () => {
    expect(() => { greeting(); }).toThrow('You must send something to greet!');
  });
  test('expect the message: Hello Parameter!', () => {
    expect(greeting('Bolivar Lindo')).toBe('Hello Bolivar Lindo!');
  });
});
