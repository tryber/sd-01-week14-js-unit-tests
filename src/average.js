/*
função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {

  let medium = params.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(medium/3)
  return (medium/3)
  // if(params.every(param => typeof param === 'number')) {
    
    // let total = params.reduce((tota, number) => tota + number, 0);
    // console.log(total)
    // return total/3
  // }  else  {
  //   return undefined
  // }
}

module.exports = average;
