/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  const operators = ['+', '-', '/', '*'];
  const numbers = expression.filter(elm => !operators.includes(elm));
  if (numbers.lenght === operators.length) throw new Error('Only * / + - operators supported');
  const currentOperators = expression.filter(elm => operators.includes(elm));
  for(let i = 0; i <)
  
}

module.exports = rpnCalculator;
