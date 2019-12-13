/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  const filteredNumbers = params.filter((num) => typeof num === 'number');
  if(filteredNumbers.length === params.length) {
    return true
  } else {
    return false
  }
}

module.exports = numbers;
