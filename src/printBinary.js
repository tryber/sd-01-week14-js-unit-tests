/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

const NumerosBinariosExistentes = (number, binary) => {
  let num = binary;
  while (num.length < number) {
    num = `0${num}`;
  }
  return num;
};

function printBinary(number) {
  let arrayBinary = [];
  const binaryList = [];
  for (let i = 0; i < number; i += 1) {
    arrayBinary.push('1');
  }
  arrayBinary = parseInt(arrayBinary.join(''), 2);
  for (let i = 0; i <= arrayBinary; i += 1) {
    binaryList.push(i);
  }
  return binaryList.map(decimal => NumerosBinariosExistentes(number, decimal.toString(2)));
}

module.exports = printBinary;
