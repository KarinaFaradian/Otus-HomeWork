const prompt = require('./task2-2');

describe('console', () => {
    [
        ({num: 1, result: January},
        {num: 5, result: May},
        {num: 9, result: September})
    ].forEach(({num, result}) => 
        it(`returns ${result} for ${num}`, () => {
            jest.spyOn(window,'alert');
            alert();
            expect(alert).toHaveBeenCalledWith(result);
      })
    );
});