const duplicate = require('../src/duplicate');

// A função deve receber uma quantidade qualquer de parâmetros
// A função pode receber strings e números
// A função retornar true se existirem valores duplicados e false caso contrário

// test('A função deve receber uma quantidade qualquer de parâmetros', () => {
//   expect(duplicate). expect.anything()
// })

// test('A função pode receber strings', () => {
//   expect(duplicate).expect.stringContaining(string)
// })

// test('A função pode receber números', () => {
//   expect(duplicate).expect.assertion(number)
// })

describe('#duplicate', () => {
  it('the params 1, 2, 3 are not duplicated', () => {
    expect(duplicate(1, 2, 3)).toBeFalsy();
  });

  it('the params 1, 2, 3, 2 are duplicated', () => {
    expect(duplicate(1, 2, 3, 2)).toBeTruthy();
  });
});
