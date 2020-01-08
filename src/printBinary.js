/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const binnaryData = ['0','1']
  let resultArray = [];
  for (let i = 0; i < number/2; i++) {
    for (let j = 0; j < binnaryData.length; j++) {
      for (let k = 0; k < binnaryData.length; k++) {
        if (number%2 == 0) {
          resultArray.push(String(binnaryData[j]) + String(binnaryData[k]))
        } else {
          String(binnaryData[j][k]) === 'undefined' ? undefined : resultArray.push(String(binnaryData[j][k]))
        }
      }      
    }
  }
  return resultArray
}


module.exports = printBinary;
