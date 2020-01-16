/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const list = [];
  let numberInput = number;
  if (!Number.isInteger(number)) throw new Error('O número precisa ser um Inteiro!');
  for (let index = 2; index <= numberInput; index += 1) {
    if (numberInput % index === 0) {
      numberInput /= index;
      list.push(index);
      index -= 1;
    }
  }
  return list;
}

module.exports = primeFactors;
