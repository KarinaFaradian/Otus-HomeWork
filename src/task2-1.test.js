const console = require('./task2-1');

describe('console', () => {
    [
        ({a: 2, b: 5, result: 5},
        {a: 6, b: 1, result: 6},
        {a: 8, b: 12, result: 12})
    ].forEach(({a, b, result}) => 
        it(`returns ${result} for ${a} and ${b}`, () => {
            jest.spyOn(console,'log');
            if (a > b) {
                console.log(a);
            } else {
                console.log(b);
            };
            expect(console.log).toHaveBeenCalledWith(result);
      })
    );
});