/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const lista = []
  if (!Number.isInteger(number) || number < 1) {
    return lista;
  }
  else {
    for (let index = 0; index <= number + 1; index++) {
      if (index < 2) {
        lista.push('0' + (index >>> 0).toString(2))
      } else {
        lista.push((index >>> 0).toString(2))
      }
    }
    return lista;
  }

}

// console.log('............................');
// console.log(printBinary('teste'));
// console.log('............................');

module.exports = printBinary;
