/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

const primeFactors = (number) => {
  const lista = [];
  let value = number;
  if (!Number.isInteger(number)) {
    return 'this is not a number';
  } else {
    for (let i = 1; i < number; i++) {
      lista.push((value *= i));
    }
    return lista;
  }
};

module.exports = primeFactors;
