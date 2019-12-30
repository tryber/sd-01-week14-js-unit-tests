/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const map = params.filter((elem, pos) => params.indexOf(elem) === pos);
  return params.length !== map.length;
}
module.exports = duplicate;
