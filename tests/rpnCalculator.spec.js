const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes

describe('rpnCalculator', () => {
    it('the result of expression 5 7 + is 13', () => {
        expect(rpnCalculator('3 4 7')).toBe(13);
    });
    it('the result of expression 5 7 35 + - is - 37', () => {
        expect(rpnCalculator('5 7 35 + -')).toBe(-37);
    });
    it('the result of expression 9 4 6 + * is 90', () => {
        expect(rpnCalculator('9 4 6 + *')).toBe(90);
    });
    it('the result of expression 18 9 22 13 - + / is 1', () => {
        expect(rpnCalculator('18 9 22 13 - + /')).toBe(1);
    });
    it('if the operators not equal to + - * /, returns a error', () => {
        expect(rpnCalculator('18 22 ^')).toThrow('Not support this operator, or do not exist.');
        expect(rpnCalculator('99 8 2 ^ *')).toThrow('Not support this operator, or do not exist.');
    });
});
