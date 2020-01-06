/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const noNumber = number.every(num => typeof num === 'number');
  if (noNumber === false || number === 0) {
    return [];
  }
  // const squareNumber = number^2;
  // for 
}

module.exports = printBinary;
