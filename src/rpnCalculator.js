/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  const arrayStrings = expression.split(' ').filter(element => element !== ' ');
  const operators = ['+', '-', '/', '*'];
  arrayStrings.forEach(element => {
    if (isNaN(Number(element)) && !operators.includes(element)) throw new Error('The function do not support this operator or it do not exist');
  })
  let numbers = [];
  let value;
  arrayStrings.forEach(element => {
    if (!isNaN(Number(element))) {
      numbers.push(element);
    } else {
      value = eval(`${numbers[numbers.length - 2]} ${element} ${numbers[numbers.length - 1]} `);
      numbers.splice(numbers.length - 2, 2);
      numbers.push(value);
    }
  });
  return numbers[0];
}

module.exports = rpnCalculator;


