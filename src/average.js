/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
    let sum = 0;
    let qnt = 0;
    for(let i of params) {
      if (typeof i !== "number") return undefined
      sum += i;
      qnt += 1;
    }
    const average = sum / qnt;
    if (Number.isInteger(average)) return average;
    return Number(average.toFixed(2));
}

module.exports = average;
