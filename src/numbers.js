/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  let bolean = true;
  params.forEach((i) => {
    if (typeof i !== 'number') bolean = false;
  });
  return bolean;
}

module.exports = numbers;
