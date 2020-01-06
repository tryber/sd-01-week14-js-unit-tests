/* eslint no-unused-vars: ["error", { "args": "none" }] */
/*
  A função last deve retornar o último elemento contido no parâmetro ${param}
  O parâmetro ${param} pode ser de qualquer tipo
*/

function last(param) {
  if (arguments.length === 1) {
    if (typeof param === 'string') {
      const arrayString = param.split('');
      const lastString = arrayString[arrayString.length - 1];
      return lastString;
    }
    const lastElemnt = param[param.length - 1];
    return lastElemnt;
  }
  const lastParam = arguments[arguments.length - 1];
  return lastParam
}

module.exports = last;
