const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('the params 1, 2, 3 are not duplicated', () => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
  });

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
  });
  it('A função deve receber uma quantidade qualquer de parâmetros', () => {
    expect(duplicate('a', 'b', 'c')).toBeFalsy();
  });
  it('A função pode receber strings e números', () => {
    expect(duplicate('a', 'a', 'c', 2, 2)).toBeTruthy();
  });
});

//Teste
