const console = require('./task1-1');

describe('console', () => {
    [
        ({a: 1, b: 2, result: 3},
        {a: 2, b: 3, result: 5},
        {a: 4, b: 2, result: 6})
    ].forEach(({a, b, result}) => 
        it(`returns ${result} for ${a} and ${b}`, () => {
            jest.spyOn(console,'log');
            console.log(a + b);
            expect(console.log).toHaveBeenCalledWith(result);
      })
    );
});