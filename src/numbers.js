/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  for (i of params) {
    if (typeof i !== 'number') return false;
  }
  return true;
}

module.exports = numbers;
