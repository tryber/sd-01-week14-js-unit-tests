// function qualquerCoisa(dec){
//   return (dec >>> 0).toString(2);
// }

// console.log(qualquerCoisa(15))

// const binary = 1111111111111111
// let conversion = parseInt(binary,2);
// let decimal = conversion.toString(10);

// console.log(decimal)

function printBinary(number) {
  let stringBinary = []
  if (number !== 0) {
    let loop = number
    while (loop > 0) {
      stringBinary.push('1')
      loop = loop - 1
    }
    console.log(stringBinary)
    stringBinary = stringBinary.join('')
    const array = []
    const conversion = parseInt(stringBinary, 2);
    let decimal = conversion.toString(10);
    while (decimal >= 0) {
      console.log(decimal)
      array.push(Number(decimal));
      decimal = decimal - 1
    }
    console.log(array.sort((a, b) => a - b))
  }
}

printBinary(4)
