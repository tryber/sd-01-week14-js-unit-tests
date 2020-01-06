/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const digBinary = ['0','1'];
  const previosArray = ['0','1'];
  if (number === 0 || typeof number !== 'number') {
    return []
  }
  for(let i = 0; i < number; i++) {
    digBinary.forEach((dig) => previosArray.forEach((digt) => previosArray.push(dig + digt)))
  }
  arr = previosArray.filter((elm) => elm.length === number)
  return arr.filter((este, i) => arr.indexOf(este) === i)
}

module.exports = printBinary;
