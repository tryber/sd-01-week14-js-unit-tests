const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const add = jest.fn((a, b) => a + b);


describe('#caller', () => {
  it('A soma precisa resultar em 5, 2+3', () => {
    expect(caller(add, 2, 3)).toBe(5);
    expect(add).toBeCalledWith(2, 3);
    expect(add).toHaveBeenCalledTimes(1);
  });

  it('os parametros sao tutus e ronaldo, precisa sair tutusronaldo', () => {
    expect(caller(add, 'tutus', 'ronaldo')).toBe('tutusronaldo');
    expect(add).toBeCalledWith('tutus', 'ronaldo');
  });
});

