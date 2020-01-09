/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores primos desse parâmetro

  Por exemplo:

  - os fatores primos para o número 15 são [3, 5], pois:
    1) 3 * 5 = 15
    2) ambos 3 e 5 são números primos
  - os fatores primos para o número 9 são [3, 3], pois:
    1) 3 * 3 = 9
    2) 3, que aparece duas vezes, é um número primo
  - os fatores primos para o número 12 são [2, 2, 3], pois:
    1) 2 * 2 * 3 = 12
    2) 2, que aparece duas vezes, e 3 são números primos

  Para mais informações acerca de fatores primos, acesse esta página:
    -> https://pt.wikipedia.org/wiki/Fator_primo
*/

const verificarSePrimoTrue = (numeroASeColocar) => {
  let inicial = 2;
  while (inicial <= Math.sqrt(numeroASeColocar))
    if (numeroASeColocar % (inicial += 1) < 1) return false;
  return numeroASeColocar > 1;
};

const primeFactors = (number) => {
  const lista = [];
  let value = number;
  if (!Number.isInteger(value)) {
    return 'this is not a number interger';
  } else {
    for (let index = 0; index < number; index += 1) {
      let valor = index;
      if (verificarSePrimoTrue(index)) {
        while (value % valor === 0) {
          lista.push(index);
          value = value / index;
        }
      }
    }
    return lista;
  }
};

module.exports = primeFactors;
