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
  it('the params 1, lana, lorde, 1, 2 are duplicated', () => {
    expect(duplicate(1, 'lana', 'lorde', 1, 2)).toBeTruthy();
  });
  it('the params aurora, 2, aurora, 2 are duplicated', () => {
    expect(duplicate('aurora', 2, 'aurora', 2)).toBeTruthy();
  });
  it('the params I, ready, for, combat are not duplicated', () => {
    expect(duplicate('I', 'ready', 'for', 'combat')).toBeFalsy();
  });
});
