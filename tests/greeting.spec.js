const greeting = require('../src/greeting');

describe('testa a função greeting', () => {
  // A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
  test('if greeting receives a string and returns a message', () => {
      const mock = jest.fn((param) => {
          if (!param) throw new Error('You must send something to greet!');
          return `Hello ${param}!`;
      });
      mock('teste');
      expect(mock).toBeCalledWith(expect.any(String))
      expect(greeting(arguments)).toBe(`Hello ${arguments}!`);
  });

  // Se nenhum parâmetro for passado um erro deve ser lançado
  test("if arguments' none, returns error", () => {
      expect(greeting).toThrow();
  });

  // A mensagem do erro deve ser 'You must send something to greet!'
  test("error returns 'You must send something to greet!'", () => {
      expect(greeting).toThrow('You must send something to greet!');
  });

});
