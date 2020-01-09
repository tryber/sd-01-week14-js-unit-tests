const last = require('../src/last');

describe('testa função last', () => {
    // A função deve receber uma quantidade qualquer de parâmetros
    it('função recebe quantidade qualquer de parametros', () => {
        last(arguments);
        last(2,3,4);
        last('y','u');
        expect(arguments.length).toEqual(expect.any(Number));
    })

    // A função deve retornar o último elemento do parâmetro passado
    it('funcao retorna o último elemento do parametro passado', () => {
        expect(last(arguments)).toBe(arguments[arguments.length-1]);
    })

    // Se a função receber uma lista, deve retornar o último elemento
    it('funcao recebe lista  e retorna ultimo elemento', () => {
        expect(last(['a',[],{},2,'aki','o,9', 9])).toBe(9);
    })

    // Se a função receber uma string, deve retornar o último caractere
    it('Se a função receber uma string, deve retornar o último caractere', () => {
        expect(last('povasndaokxc')).toBe('c');
    });


    // Se a função receber vários parâmetros, deve retornar o último parâmetro
    it('Se a função receber vários parâmetros, deve retornar o último parâmetro', () => {
        expect(last('i', [0, {'a': 2}, 'asdasd'])).toBe('asdasd');
    });
});
