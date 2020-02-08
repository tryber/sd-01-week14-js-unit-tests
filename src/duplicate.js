/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const strOrNum = [...params].map(param => typeof param);
  for (type of strOrNum) {
    if(type !== `string` && type !== `number`) {
      return 'Insira strings ou numeros';
    };
  };

  const storage = [];
  const booleanArray = [...params].map((param) => {
    if (storage.includes(param)) {
      return true;
    }
    storage.push(param);
    return false;
  });
  return booleanArray.includes(true);
}

module.exports = duplicate;
