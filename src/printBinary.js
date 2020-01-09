/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */


function printBinary(number) {
  if (number === 0 || typeof number !== 'number') {
    return []
  }
  let decimalEquiv = 0;
  for (let i = number-1; i >= 0 ; i--) {
    decimalEquiv += Math.pow(2,i)
  }
  let numberList = []
  for (let j = 0; j <= decimalEquiv ; j++) {
    numberList.push((j >>> 0).toString(2))
  }
  let binArray = numberList.map(num => {
    while (num.length < number) {
      num = '0'.concat(num)
    }
    return num
  });
  console.log(binArray)
  return binArray
}

printBinary(3)

module.exports = printBinary;
