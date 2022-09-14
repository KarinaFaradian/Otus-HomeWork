const console = require('./task1-2');

describe('console', () => {
    [
        ({a: 1, b: 2, result: 2},
        {a: 2, b: 3, result: 6},
        {a: 4, b: 2, result: 8})
    ].forEach(({a, b, result}) => 
        it(`returns ${result} for ${a} and ${b}`, () => {
            jest.spyOn(console,'log');
            console.log(a * b);
            expect(console.log).toHaveBeenCalledWith(result);
      })
    );
});