/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */


function printBinary(number) {
  if (number === 0 || typeof number !== 'number') {
    return [];
  }
  const decimalEquiv = (2 ** number) - 1;
  const numberList = [];
  for (let j = 0; j <= decimalEquiv; j += 1) {
    numberList.push(j.toString(2));
  }
  const binArray = numberList.map((num) => {
    let decoyNum = num;
    while (decoyNum.length < number) {
      decoyNum = `0${decoyNum}`;
    }
    return decoyNum;
  });
  return binArray;
}

printBinary(3);

module.exports = printBinary;
