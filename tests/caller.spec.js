const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const func = jest.fn((a, b) => a + b);

describe('#caller', () => {
  it('A soma precisa resultar em 5, 2+3', () => {
    expect(caller(func, 2, 3)).toBe(5);
    expect(func).toBeCalledWith(2, 3);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('os parametros sao tutus e ronaldo, precisa sair tutusronaldo', () => {
    expect(caller(func, 'tutus', 'ronaldo')).toBe('tutusronaldo');
    expect(func).toBeCalledWith('tutus', 'ronaldo');
  });
});

