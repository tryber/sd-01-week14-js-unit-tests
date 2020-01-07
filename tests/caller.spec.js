const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

function fn(a, b) {
  return a + b;
}

describe('#caller', () => {
  it('Confirme if the function is ok', () => {
    const sum = jest.fn();
    caller(sum, 1, 2);
    expect(sum).toHaveBeenCalled();
  });

  it('The fn is a function', () => {
    expect(typeof fn).toBe('function');
  });

  it('The return of sum 2 and 3 is 5', () => {
    expect(caller(fn, 2, 3)).toBe(5);
  });

  it('The return of sum pre- and historia, is pre-historia', () => {
    expect(caller(fn, 'pre-', 'historia')).toBe('pre-historia');
  });
});
