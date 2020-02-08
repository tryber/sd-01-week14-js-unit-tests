const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('receives any quantity of parameters', () => {
    const averageMock = jest.fn((...params) => average(...params));
    const mathRandom = Math.floor(Math.random() * 10);
    const testParameters = '1'.repeat(mathRandom);
    const parametersArray = [];
    [...testParameters].forEach(each => parametersArray.push(Number(each)));

    expect([...testParameters].length).toStrictEqual(expect.any(Number));
    averageMock(...parametersArray);
    expect(averageMock).toHaveReturnedWith(expect.any(Number));
    averageMock('oi');
    expect(averageMock).toHaveReturnedWith(undefined);
    averageMock(true);
    expect(averageMock).toHaveReturnedWith(undefined);
  });

  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
});
