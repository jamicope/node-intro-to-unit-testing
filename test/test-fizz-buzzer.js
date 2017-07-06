const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

    // test the normal case
    it('should ensure numbers are divisible by 3, 5, or 15', function () {

        // shows what normal cases should look like, including negative numbers
        const normalCases = [
            {
                a: 15,
                b: 3,
                expected: 5
            },
            {
                a: 195,
                b: 15,
                expected: 13
            },
            {
                a: 25,
                b: -5,
                expected: -5
            }
        ];
    });

    it('should raise error if args not numbers', function () {
        // range of bad inputs where not both are numbers
        const badInputs = [
            ['a', 1],
            ['1', 2],
            [2, false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            (function () {
                fizzBuzzer(input[0], input[1])
            }).should.throw(Error);
        });
    });
});
