/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const primeList = [];
  if (!Number.isInteger(number)) {
    throw new Error("parameters must be integer numbers")
  }
  for (let num = 2; num <= number; num+=1) {
    let bolean = true;
    for (let div = 2; div <= num; div+=1) {
      if (div !== num && num % div === 0) {
        bolean = false;
      };
    }
    if (bolean) {
      primeList.push(num);
    };
  }
  return primeList;
}

module.exports = primeFactors;
