/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let result = number;

  if(number === 0 || typeof number !== "number" ) {
    result = [];
  }

  console.log(result);

}

printBinary("fodase");
module.exports = printBinary;
