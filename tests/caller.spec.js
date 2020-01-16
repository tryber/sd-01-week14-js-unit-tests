const caller = require('../src/caller');

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplication = (a, b) => a * b;
const add = jest.fn((a, b) => a + b);

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#caller', () => {
  it('confirm if function has been called', () => {
    expect(add(2, 9)).toBe(11);
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledTimes(1);
  });
  it('receives a function first and makes a addition', () => {
    expect(caller(addition, 5, 11)).toBe(16);
  });
  it('receives a function first and makes a subtraction', () => {
    expect(caller(subtraction, 2020, 1995)).toBe(25);
  });
  it('receives a function first and makes a division', () => {
    expect(caller(division, 999, 333)).toBe(3);
  });
  it('receives a function first and makes a multiplication', () => {
    expect(caller(multiplication, 32, 94)).toBe(3008);
  });
});
