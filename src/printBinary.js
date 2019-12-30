/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */
function printMaiorQue1(number) {
  const lista = [];
  for (let index = 0; index <= number + 1; index++) {
    if (index < 2) {
      lista.push('0' + (index >>> 0).toString(2));
    } else {
      lista.push((index >>> 0).toString(2));
    }
  }
  return lista;
}

function printiguala1(number) {
  const lista = [];
  for (let index = 0; index < number + 1; index++) {
    lista.push((index >>> 0).toString(2));
  }
  return lista;
}

function printBinary(value) {
  const resposta = [];
  const cases = {
    0: resposta,
    teste: resposta,
    1: printiguala1(value),
    2: printMaiorQue1(value),
    3: printMaiorQue1(value),
  };

  return cases[value];
}

// let lista;
// switch (value) {
//   case value === 1:
//     console.log(printiguala1(value));
//     lista = printiguala1(value)
//     break;
//   case value > 1:
//     console.log(printMaiorQue1(value));
//     lista = printMaiorQue1(value)
//     break;
//   // default:
//   //   lista = []
// }

// // if (!Number.isInteger(number) || number < 1) {
// //   return lista;
// // } else if (number === 1) {
// //   for (let index = 0; index < number + 1; index++) {
// //     lista.push((index >>> 0).toString(2))
// //   }
// //   return lista;
// // }
// // else {
// //   for (let index = 0; index <= number + 1; index++) {
// //     if (index < 2) {
// //       lista.push('0' + (index >>> 0).toString(2))
// //     } else {
// //       lista.push((index >>> 0).toString(2))
// //     }
// //   }
// // }

// console.log('............................');
// console.log(printBinary(0));
// console.log('............................');

module.exports = printBinary;
