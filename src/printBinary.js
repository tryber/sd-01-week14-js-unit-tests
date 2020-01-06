/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
//   let stringBinary = []
//   let binaryStringList = []
//   if (number !== 0 || number !== typeof Number) {
//     let loop = number
//     while (loop > 0) {
//       stringBinary.push('1')
//       loop = loop - 1
//     }
//     stringBinary = stringBinary.join('')
//     let convertToNumber = parseInt(stringBinary, 2).toString(10)
//     while (convertToNumber > 0) {
//       let convertNumber = (convertToNumber >>> 0).toString(2)
//       binaryStringList.push(convertNumber)
//       convertToNumber = convertToNumber - 1
//     }
//     return binaryStringList.sort((a, b) => a - b)
//   }
//   return [];
}

module.exports = printBinary;
