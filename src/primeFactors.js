/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let decoyNumber = number;
  const factors = [];
  if(String(number).match(/[/*\-+=.]/g) !== null) {
    return 'This number is not an integer';
  }
  for (let i = 2; i <= decoyNumber; i += 1) {
    pirateFlag = true;
    while (decoyNumber % i === 0) {
        decoyNumber /= i;
        factors.push(i);
      }
   }
  return factors;
  }

  primeFactors(90)
module.exports = primeFactors;
