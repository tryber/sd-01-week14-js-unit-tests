const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
    it('expect last chars of a string argument', () => {
        expect(last('taylorswift')).toBe('t');
        expect(last('lovelesss generation ')).toBe(' ');
    })
    it('expect last element of a list', () => {
        expect(last([1, 2, 3, { Lana: 'Sad Girl' }])).toEqual({ Lana: 'Sad Girl' });
        expect(last(['ecxtasy', 'heroine', 'weed', 'beer', 'suggar'])).toBe('suggar');
    })
    it('expect last argument pass', () => {
        expect(last(1,2,3,4,5)).toBe(5);
        expect(last('clean', 'blank space', 'you are in love')).toBe('you are in love');
        expect(last(1, 2, undefined)).toBe(undefined);
        expect(last(1,2,'clean',[1,2,3])).toEqual([1,2,3]);
    })
})