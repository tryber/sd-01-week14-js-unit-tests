const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'
describe('#greeting', () => {
  it('expect greeting of Douglas should be Hello Douglas!', () => {
    expect(greeting('Douglas')).toBe('Hello Douglas!');
  });
  it('expect greeting of not argumento', () => {
    expect(greeting).toThrow('You must send something to greet!');
  });
});

