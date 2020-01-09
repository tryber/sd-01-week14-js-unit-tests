/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

const numbers = (...params) => params.every(number => typeof number === 'number');

module.exports = numbers;

//Teste
