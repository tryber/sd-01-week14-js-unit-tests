/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */


function printBinary(number) {
  if (number === 0 || typeof number !== 'number') {
    return [];
  }
  let decimalEquiv = Math.pow(2,number) - 1;
  let numberList = []
  for (let j = 0; j <= decimalEquiv ; j++) {
    numberList.push((j >>> 0).toString(2));
  }
  let binArray = numberList.map(num => {
    while (num.length < number) {
      num = '0'.concat(num);
    }
    return num;
  });
  return binArray;
}

printBinary(2);

module.exports = printBinary;
