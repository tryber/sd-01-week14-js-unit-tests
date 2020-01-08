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
  it('the params 4, a, 16, corujaEsforçado, true, formarei, false, 2020, formarei, JusBrasil are duplicated', () => {
    expect(duplicate(4, 'a', 16, 'corujaEsforçado', true, 'formarei', false, 2020, 'formarei', 'JusBrasil')).toBeTruthy();
  });
  it('the params this, is, sparta, true, 300 are not duplicated', () => {
    expect(duplicate('this', 'is', true, 'sparta', 300)).toBeFalsy();
  });
});
