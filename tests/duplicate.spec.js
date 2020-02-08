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
  it('the function returns false when no string is duplicated', () => {
    expect(duplicate('a', 'b', 'carro')).toBeFalsy();
  });
  it('the function returns truth when a string is duplicated', () => {
    expect(duplicate('carro', 'a', 'b', 'carro')).toBeTruthy();
  });
  it('if the params dont receive string or numbers as parameters returns warning string', () => {
    const duplicateMock = jest.fn((...params) => duplicate(...params));
    duplicateMock('string', 'anotherString');
    expect(duplicateMock).not.toHaveReturnedWith('Insira strings ou numeros');
    duplicateMock(1, 2, 3, 4, 5);
    expect(duplicateMock).not.toHaveReturnedWith('Insira strings ou numeros');
    duplicateMock({ 1: 'space', 2: 'space' });
    expect(duplicateMock).toHaveReturnedWith('Insira strings ou numeros');
    duplicateMock([1, 2, 3, 4]);
    expect(duplicateMock).toHaveReturnedWith('Insira strings ou numeros');
  });
});
