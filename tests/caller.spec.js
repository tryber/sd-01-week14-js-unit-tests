const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#caller', () => {
  const displayParameters = jest.fn((prmI, prmII) => `${prmI} ${prmII}`);
  
  it('expect 3 arguments', () => {
    expect(() => { caller(displayParameters, 2, 3, 4); }).toThrow('The function must recive a maximum of 3 parameters');
    expect(() => { caller(1, 2, 3, 4); }).toThrow('The function must recive a maximum of 3 parameters');
  });
  it('expect first argument to be a function', () => {
    expect(() => { caller(1, 2, 3); }).toThrow('The first argument must be a function');
  });
  it('expect that the first argument function to be call with the others two parameters', () => {
    expect(caller(displayParameters, 'Taylor', 'Swift')).toBe('Taylor Swift');
    expect(displayParameters).toHaveBeenCalledTimes(1);
    expect(displayParameters).toBeCalledWith('Taylor', 'Swift');
  });
});
