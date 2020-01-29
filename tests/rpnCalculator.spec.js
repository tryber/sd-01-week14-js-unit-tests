const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os teste

describe('Requisito RpnCalculator', () => {
  it('Retornar o resultado da expressão', () => {
    expect(rpnCalculator('3 4 +')).toStrictEqual(7);
    expect(rpnCalculator('3 4 - 5 +')).toStrictEqual(4);
    expect(rpnCalculator('3 4 - 5 *')).toStrictEqual(-5);
    expect(rpnCalculator('3 4 5 * -')).toStrictEqual(-17);
    expect(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -')).toStrictEqual(5);
  });
  it('Retornar uma mensagem de erro se a função não suportar o operador', () => {
    expect(() => rpnCalculator('3 4 Arctic 5 *')).toThrow('A função não suporta este operador ou ela não existe');
  });
});
