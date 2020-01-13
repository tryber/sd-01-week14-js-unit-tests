/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {

  let operands = ['+', '-', '*', '/' ]
  let stack = []
  let i = 0
  const arrayStrings = expression.split(' ').filter(element => element !== ' ');
  stack.push(arrayStrings[i])
  i++

  arrayStrings.forEach((element) => {
     if (isNaN(Number(element)) && !operands.includes(element)) throw new Error('The function do not support this operator or it do not exist');
  });
  
  while(i <= arrayStrings.length) {
    let item = arrayStrings[i]
    let index = operands.indexOf(item)
    if (index < 0) {
      stack.push(arrayStrings[i])
    } else {
      if (index == 0) {
        let a = parseInt(stack.splice(-1)[0], 10)
        let b = parseInt(stack.splice(-1)[0], 10)
        stack.push(a+b)
      }
      if (index == 1) {
      let a = parseInt(stack.splice(-1)[0], 10)
        let b = parseInt(stack.splice(-1)[0], 10)
        stack.push(b-a)
      }
      if (index == 2) {
        let a = parseInt(stack.splice(-1)[0], 10)
        let b = parseInt(stack.splice(-1)[0], 10)
        stack.push(a*b)
      }
      if (index == 3) {
      let a = parseInt(stack.splice(-1)[0], 10)
        let b = parseInt(stack.splice(-1)[0], 10)
        stack.push(b/a)
      }
    }
     i++
  }

  return parseInt(stack[0],10)
};

module.exports = rpnCalculator;
