/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let factors = [1, number];
  function addToFactors(n, m) {
    if (!factors.includes(n)) {
      factors.push(n);
    }
    if (!factors.includes(m)) {
      factors.push(m);
    }
  }
  for (let i = 2; i <= number; i++) {
    const storage = number;
    if (number % i === 0) {
      addToFactors(number, i);
      while((number/i)%i === 0) {
        addToFactors(number, i);
        number = number/i;
        addToFactors(number, i);
      }
      addToFactors(number, i);
    }
    number = storage;
  }

  return factors;
}

console.log(primeFactors(40));

module.exports = primeFactors;
