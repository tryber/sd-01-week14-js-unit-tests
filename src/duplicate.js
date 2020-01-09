/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const storage = [];
  for (value of params) {
    if (storage.includes(value)) {
      return true;
    }
    storage.push(value);
  }

  return storage;
}

module.exports = duplicate;
