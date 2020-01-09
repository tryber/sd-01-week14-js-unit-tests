/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const lista = [];
  let value = number;

  if (!Number.isInteger(number)) throw new Error('Não é um número.')

  for (let i = 1; i < number; i += 1) {
    lista.push((value *= i));
  }
  return lista;
}

module.exports = primeFactors;
