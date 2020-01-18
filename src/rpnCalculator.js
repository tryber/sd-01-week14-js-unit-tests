/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  let numExp = expression.split(' ');
  const opRegex = /[\+\-\/\*]\B/g;
  const math = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }
  }
  function iterate() {
    let index = numExp.findIndex((element) => String(element).match(opRegex) );
    const calc = (op) => {
      let newValue = math[op](Number(numExp[index-2]),Number(numExp[index-1]))
      numExp.splice(index-2, 3, newValue);
      return numExp;
    };
    if (index !== -1) {
        calc(numExp[index])
    };
    return numExp
  };

  while(numExp.length !== 1) iterate();
  return Number(numExp)
}

rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -');

module.exports = rpnCalculator;
