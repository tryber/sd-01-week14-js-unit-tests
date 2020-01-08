/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function completeBinary(binaryNumber, number) {
  let binary = binaryNumber;
  while (binary.length !== number) {
    binary = `0${binary}`;
  }
  return binary;
}

function printBinary(number) {
  if (typeof number !== 'number' || number === 0) return [];

  const array = ['0'];
  for (let index = 0; array[array.length - 1].length < number || array[array.length - 1].includes('0'); index += 1) {
    array.push(completeBinary(index.toString(2), number));
  }
  array.splice(0, 1);
  return array;
}

module.exports = printBinary;
