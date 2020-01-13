const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes

describe('#rpnCalculator', () => {
  it('should return the result of the converted expression', () => {
    expect(rpnCalculator('3 4 - 5 *')).toStrictEqual(-5);
    expect(rpnCalculator('3 4 5 * -')).toStrictEqual(-17);
    expect(rpnCalculator('3 4 - 5 +')).toStrictEqual(4);
    expect(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -')).toStrictEqual(5);
    expect(rpnCalculator('3 4 +')).toStrictEqual(7);
  });
  it('should return a error message if the function do not support an operator', () => {
    expect(() => rpnCalculator('3 4 ^ 5 *')).toThrow('The function do not support this operator or it do not exist');
    expect(() => rpnCalculator('3 4 adele 5 *')).toThrow('The function do not support this operator or it do not exist');
  });
});
