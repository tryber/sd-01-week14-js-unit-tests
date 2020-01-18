/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  const numExp = expression.split(' ');
  const opRegex = /[+-/*]\B/g;
  const math = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
  }
  function iterate() {
    const index = numExp.findIndex(element => String(element).match(opRegex));
    const calc = (op) => {
      const newValue = math[op](Number(numExp[index - 2]), Number(numExp[index - 1]));
      numExp.splice(index - 2, 3, newValue);
      return numExp;
    };
    if (index == -1) {
      throw "Você não usou operadores adequados."
    }
    calc(numExp[index]);

    return numExp;
  }

  while (numExp.length !== 1) iterate();
  return Number(numExp);
}

module.exports = rpnCalculator;
