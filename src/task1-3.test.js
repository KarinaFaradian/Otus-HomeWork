const console = require('./task1-3');

describe('console', () => {
    [
        ({num: 153, firstNum: 1, secondNum: 5, thirdNum: 3, sum: 9},
        {num: 801, firstNum: 8, secondNum: 0, thirdNum: 1, sum: 9},
        {num: 222, firstNum: 2, secondNum: 2, thirdNum: 2, sum: 8})
    ].forEach(({num, firstNum, secondNum, thirdNum, sum}) => 
        it(`returns ${sum} for ${num}`, () => {
            jest.spyOn(console,'log');
            console.log(sum);
            expect(console.log).toHaveBeenCalledWith(sum);
      })
    );
});