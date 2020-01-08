/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (typeof number !== 'number' || number === 0) return [];

  const array = ['0'];
  for (let cont = 0; array[array.length - 1].length < number || array[array.length - 1].includes('0'); cont += 1) {
    let binary = cont.toString(2);
    while (binary.length !== number) {
      binary = `0${binary}`;
    }
    array.push(binary);
  }
  array.splice(0,1);
  return array;
}

module.exports = printBinary;
