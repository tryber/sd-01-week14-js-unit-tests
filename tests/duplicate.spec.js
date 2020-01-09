const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

describe('#duplicate', () => {
  it('expect falsy value for not duplicate params', () => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
    expect(duplicate('I', 'ready', 'for', 'combat')).toBeFalsy();
  });
  it('expect truth value for duplicate params', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
    expect(duplicate(1, 'lana', 'lorde', 1, 2)).toBeTruthy();
    expect(duplicate('aurora', 2, 'aurora', 2)).toBeTruthy();
  });
});
