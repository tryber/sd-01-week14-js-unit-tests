/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function operation(valueI, operator, valueII) {
  const operators = ['+', '-', '/', '*'];
  switch(operator) {
    case operators[0]:
      return Number(valueI) + Number(valueII);
    case operators[1]:
      return Number(valueI) - Number(valueII);
    case operators[2]:
      return Number(valueI) / Number(valueII);
    case operators[3]:
      return Number(valueI) * Number(valueII);
  }
}

// eval(`${numbers[numbers.length - 2]} ${element} ${numbers[numbers.length - 1]} `);

function rpnCalculator(expression) {
  const arrayStrings = expression.split(' ').filter(element => element !== ' ');
  const operators = ['+', '-', '/', '*'];
  arrayStrings.forEach((element) => {
    if (isNaN(Number(element)) && !operators.includes(element)) throw new Error('The function do not support this operator or it do not exist');
  });
  const numbers = [];
  let value;
  arrayStrings.forEach((element) => {
    if (!isNaN(Number(element))) {
      numbers.push(element);
    } else {
      value = operation(numbers[numbers.length - 2], element, numbers[numbers.length - 1])
      numbers.splice(numbers.length - 2, 2);
      numbers.push(value);
    }
  });
  return numbers[0];
}

module.exports = rpnCalculator;
