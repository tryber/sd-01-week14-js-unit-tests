const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#caller', () => {
  function displayParameters(prmI, prmII) {
    return `${prmI} ${prmII}`;
  }
  test('expect 3 arguments', () => {
    expect(() => { caller(displayParameters, 2, 3, 4); }).toThrow('The function must recive a maximum of 3 parameters');
    expect(() => { caller(1, 2, 3, 4); }).toThrow('The function must recive a maximum of 3 parameters');
  });
  test('expect first argument to be a function', () => {
    expect(() => { caller(1, 2, 3); }).toThrow('The first argumnet must be a function');
  });
  it('expect the specific result', () => {
    expect(caller(displayParameters, 'Taylor', 'Swift')).toBe('Taylor Swift');
  });
});
