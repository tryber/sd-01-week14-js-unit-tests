/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const data = [];
  params.forEach(i => data.push(i));
  const uniqData = data.filter((prm, ind) => data.indexOf(prm) === ind);
  if (uniqData.length === data.length) return false;
  return true;
}

module.exports = duplicate;
