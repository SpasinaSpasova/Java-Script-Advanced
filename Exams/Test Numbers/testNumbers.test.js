const { assert, expect } = require("chai");
const testNumbers = require('./testNumbers.js');

describe("Tests Numbers", function () {

    describe("Sum Numbers", function () {
        it("Invalid first number ''", function () {
            let result = testNumbers.sumNumbers('', 2);
            assert.equal(result, undefined);
        });
        it("Invalid first number '5'", function () {
            let result = testNumbers.sumNumbers('5', 2);
            assert.equal(result, undefined);
        });
        it("Invalid first number []", function () {
            let result = testNumbers.sumNumbers([], 2);
            assert.equal(result, undefined);
        });
        it("Invalid first number {}", function () {
            let result = testNumbers.sumNumbers({}, 2);
            assert.equal(result, undefined);
        });

        //--------------------------------------
        it("Invalid second number ''", function () {
            let result = testNumbers.sumNumbers(3, '');
            assert.equal(result, undefined);
        });
        it("Invalid second number '5'", function () {
            let result = testNumbers.sumNumbers(3, '5');
            assert.equal(result, undefined);
        });
        it("Invalid second number []", function () {
            let result = testNumbers.sumNumbers(3, []);
            assert.equal(result, undefined);
        });
        it("Invalid second number {}", function () {
            let result = testNumbers.sumNumbers(3, {});
            assert.equal(result, undefined);
        });
        it("Invalid first and second number ", function () {
            let result = testNumbers.sumNumbers('3', '3');
            assert.equal(result, undefined);
        });

        //-----------------------------------------------
        it("Valid float numbers", function () {
            let result = testNumbers.sumNumbers(2.2, 2.3);
            assert.equal(result, 4.50);
        });
        it("Valid float number with int", function () {
            let result = testNumbers.sumNumbers(2.2, 3);
            assert.equal(result, '5.20');
        });
        it("Valid int number with float", function () {
            let result = testNumbers.sumNumbers(3, 2.2);
            assert.equal(result, 5.20);
        });
        it("Valid int number with int", function () {
            let result = testNumbers.sumNumbers(2, 3);
            assert.equal(result, 5.00);
        });
        it("Valid zero float numbers", function () {
            let result = testNumbers.sumNumbers(0.0000, 0.0000000);
            assert.equal(result, 0.00);
        });
        it("Valid negative float numbers", function () {
            let result = testNumbers.sumNumbers(-5.5, -4.5);
            assert.equal(result, -10.00);
        });
        it("Valid negative float numbers with int", function () {
            let result = testNumbers.sumNumbers(-5.5, 10);
            assert.equal(result, 4.50);
        });
        it("Valid int with negative float numbers", function () {
            let result = testNumbers.sumNumbers(1, -5.5);
            assert.equal(result, -4.50);
        });
    });
    describe("Number Checker", function () {
        it("Invalid number ''", function () {
            expect(() => testNumbers.numberChecker('').to.throw('The input is not a number!'));
        });
        it("Invalid number '5'", function () {
            expect(() => testNumbers.numberChecker('5').to.throw('The input is not a number!'));
        });
        it("Invalid number []", function () {
            expect(() => testNumbers.numberChecker([]).to.throw('The input is not a number!'));
        });
        it("Invalid number {}", function () {
            expect(() => testNumbers.numberChecker({}).to.throw('The input is not a number!'));
        });

        //----------------------------------------
        it("Valid int even number", function () {
            let result = testNumbers.numberChecker(4);
            assert.equal(result, 'The number is even!');
        });
        it("Valid 0 even number", function () {
            let result = testNumbers.numberChecker(0);
            assert.equal(result, 'The number is even!');
        });
        // it("Valid 2.0 float number", function () {
        //     let result = testNumbers.numberChecker(2.0);
        //     assert.equal(result, 'The number is even!');
        // });
        it("Valid -4 number", function () {
            let result = testNumbers.numberChecker(-4);
            assert.equal(result, 'The number is even!');
        });
        //-------------------------------
        // it("Valid 2.1 float odd number", function () {
        //     let result = testNumbers.numberChecker(2.1);
        //     assert.equal(result, 'The number is odd!');
        // });
        it("Valid 5 int odd number", function () {
            let result = testNumbers.numberChecker(5);
            assert.equal(result, 'The number is odd!');
        });
        it("Valid 1 int odd number", function () {
            let result = testNumbers.numberChecker(1);
            assert.equal(result, 'The number is odd!');
        });
        it("Valid -5 int odd number", function () {
            let result = testNumbers.numberChecker(-5);
            assert.equal(result, 'The number is odd!');
        });

    });
    describe("Average Sum Array", function () {
        it("All int", function () {
            let result = testNumbers.averageSumArray([5, 6, 4, 3, 7, 2]);
            assert.equal(result, 4.5);
        });
        it("All float", function () {
            let result = testNumbers.averageSumArray([2.50, 3.68, 4.50, 6.03]);
            assert.equal(result, 4.1775);
        });
        it("Mixed", function () {
            let result = testNumbers.averageSumArray([2, 3, 4.50, 6.03]);
            assert.equal(result, 3.8825000000000003);
        });
        it("Mixed with negative", function () {
            let result = testNumbers.averageSumArray([-2, -3, -4.50, -6.03]);
            assert.equal(result, -3.8825000000000003);
        });
        it("All negative", function () {
            let result = testNumbers.averageSumArray([-2, -3, -6]);
            assert.equal(result, -3.6666666666666665);
        });
    });
});
