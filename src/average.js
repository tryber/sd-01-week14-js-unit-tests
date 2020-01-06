/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  let sum = 0;
  let qnt = 0;
  let bolean = true;
  params.forEach((i) => {
    if (typeof i !== 'number') {
      bolean = false;
    }
    sum += i;
    qnt += 1;
  });
  if (bolean) {
    const avr = sum / qnt;
    if (Number.isInteger(avr)) return avr;
    return Number(avr.toFixed(2));
  }
  return undefined;
}

module.exports = average;
