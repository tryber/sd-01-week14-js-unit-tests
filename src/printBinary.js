/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function complete(binary, number) {
  let num = binary;
  while (num.length !== number) {
    num = `0${num}`;
  }
  return num;
}

function printBinary(number) {
  if (typeof number === 'string' || number === 0) {
    return [];
  }
  const arr = ['0'];
  for (let cont = 0; verify(arr[arr.length - 1], number); cont += 1) {
    arr.push(complete(cont.toString(2), number));
  }
  arr.splice(0, 1);
  return arr;
}


function verify(binary, number) {
  return (binary.length < number || binary.includes('0'));
}

module.exports = printBinary;
