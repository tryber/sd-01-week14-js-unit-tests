/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

const addFault = (number, binary) => {
  let num = binary;
  while (num.length < number) {
    num = `0${num}`;
  }
  return num;
};

function printBinary(number) {
  let binToDec = [];
  const binaryList = [];
  for (let i = 0; i < number; i += 1) {
    binToDec.push('1');
  }
  binToDec = parseInt(binToDec.join(''), 2);
  for (let i = 0; i <= binToDec; i += 1) {
    binaryList.push(i);
  }
  return binaryList.map(decimal => addFault(number, decimal.toString(2)));
}

module.exports = printBinary;
