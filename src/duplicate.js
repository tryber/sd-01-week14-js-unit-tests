/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

const duplicate = (...params) => new Set(params).size !== params.length;

module.exports = duplicate;
