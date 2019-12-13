const caller = require('../src/caller');
const assert = require('assert');
const AssertionError = require('assert').AssertionError;

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#caller', () => {
    const cruelSummer = (prmI, prmII) => {
        return `${prmI}, ${prmII} received`;
    }
    test('expect 3 arguments', () => {
       function testArguments() {
        caller(cruelSummer,2,3,4);
       } 
    })

    expect(testArguments).toTrowError(new Error('The funciont must recive a maximum of 3 parameters'))
    // it('expect first argument type to be a function', () => {
    //     expect(caller(cruel))
    // })
})