const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('should print empty array', () => {
    expect(printBinary(0)).toStrictEqual([]);
  });
  it('should print empty array', () => {
    expect(printBinary(undefined)).toStrictEqual([]);
  });
  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toStrictEqual(['0', '1']);
  });
  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toStrictEqual(['00', '01', '10', '11']);
  });
  it('should print binary numbers until 3', () => {
    expect(printBinary(3)).toStrictEqual(['100', '101', '000', '001', '010', '011', '110', '111']);
  });
});
