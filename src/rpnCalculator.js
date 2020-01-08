/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  expression = expression.split(' ')
  const opRegex = /[\s\+-\/\*]/g;
    function iterate() {
      for (char of expression) {
        if (String(char).search(opRegex) !== -1) {
            let currentOp = char[String(char).search(opRegex)]
            let index = expression.indexOf(currentOp)
            let newValue;
            switch (currentOp) {
              case '+':
                newValue = Number(expression[index-2]) + Number(expression[index-1])
                expression.splice(index-2, 3, newValue)
                return expression;
              case '-':
                newValue = Number(expression[index-2]) - Number(expression[index-1])
                expression.splice(index-2, 3, newValue)
                return expression;
              case '/':
                newValue = Number(expression[index-2]) / Number(expression[index-1])
                expression.splice(index-2, 3, newValue)
                return expression;
              case '*':
                newValue = Number(expression[index-2]) * Number(expression[index-1])
                expression.splice(index-2, 3, newValue)
                return expression;
            }        
        }
      }
    }
    while(expression.length > 1) iterate();
  return Number(expression)
}

console.log(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -'))

module.exports = rpnCalculator;
