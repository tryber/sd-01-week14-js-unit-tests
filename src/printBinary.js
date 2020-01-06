/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function completingBinary(valueOf, number) {
  if (valueOf.length < number) {
    let binary = `${'0'.repeat(number - value.length)}${value}`;
  }
  return binary;
}

const calculateNumbersOfArrays = (number) => {
  let numberOfBinaries = 1;
  for (let i = 1; i <= number; i += 1) {
    numberOfBinaries *= 2;
  }
  return numberOfBinaries;
};

function printBinary(number) {
  const result = [];

  if (number === 0 || typeof number !== 'number') {
    return result;
  }
  for (i = 0; result.length < calculateNumbersOfArrays(number); i += 1) {
    result.push(completingBinary(i.toString(2), number));
  }
  return result;
}

module.exports = printBinary;
