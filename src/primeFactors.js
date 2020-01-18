/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let decoyNumber = number;
  const factors = [1, decoyNumber];
  function addToFactors(n) {
    if (!factors.includes(n)) {
      factors.push(n);
    }
  }
  for (let i = 2; i <= decoyNumber; i += 1) {
    const storage = decoyNumber;
    while (decoyNumber % i === 0) {
      addToFactors(i);
      addToFactors(decoyNumber);
      decoyNumber /= i;
    }
    decoyNumber = storage;
  }

  return factors;
}

module.exports = primeFactors;
