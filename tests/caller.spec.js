const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const fn = (a, b) => a * b;

describe('#testCaller', () => {
    it('Caller', () => {
        expect(caller(fn, 3, 4)).toBe(12);
    });
    it('Caller with string', () => {
        expect(caller(fn, 3, '4')).toBe(12);
    });
});
