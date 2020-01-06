/*
  A função caller recebe uma função ${fn} e dois parâmetros ${a} e ${b}
  e retorna o resultado da chamada de ${fn} com os parâmetros ${a} e ${b}

  exemplo:

  caller(some, a, b)

  é a mesma coisa que:

  some(a, b)
*/

function caller(fn, a, b) {
  if (arguments.length > 3) throw new Error('The function must recive a maximum of 3 parameters');
  if (typeof fn !== 'function') throw new Error('The first argumnet must be a function');
  return fn(a, b);
}

module.exports = caller;
