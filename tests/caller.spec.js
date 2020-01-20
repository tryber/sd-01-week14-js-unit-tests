const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('Requisito Caller', () => {
  const MOCK = jest.fn((a, b) => a + b);
  it('espera o retorno 9', () => {
    expect(caller(MOCK, 2, 3)).toBe(5);
    expect(MOCK).toHaveBeenCalledWith(2, 3);
    expect(MOCK).toHaveBeenCalledTimes(1);
  });
  it('esperar retorno meuprecioso', () => {
    expect(caller(MOCK, 'meu', 'precioso')).toBe('meuprecioso');
    caller(MOCK, 'meu', 'precioso');
    expect(MOCK).toHaveBeenCalledWith('meu', 'precioso');
  });
});
