/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(params) {
  for (let i = 0; i < params.length; i += 1) {
    return params.every(element => element === params[i]);
  }
}

module.exports = duplicate;
