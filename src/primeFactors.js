/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let decoyNumber = number;
  const factors = [];
  function addToFactors(n) {
    if (!factors.includes(n)) {
      factors.push(n);
    }
  }
  for (let i = 2; i < decoyNumber; i += 1) {
    if (decoyNumber % i === 0) {
      while (decoyNumber % i === 0 && (decoyNumber / i) % i === 0) {
        decoyNumber /= i;
      }
      addToFactors(i)
    }
  }
  return factors;
}

module.exports = primeFactors;
