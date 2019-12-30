const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const fn = (a, b) => a + b;


describe('#caller', () => {
  it('A soma precisa resultar em 5, 2+3', () => {
    expect(caller(fn, 2, 3)).toBe(5);
  });

  it('osparametros sao tutus e ronaldo, precisa sair tutusronaldo', () => {
    expect(caller(fn, 'tutus', 'ronaldo')).toBe('tutusronaldo');
  });
});

