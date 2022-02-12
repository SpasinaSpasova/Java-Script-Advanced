const { assert, expect } = require("chai");
const isOddOrEven = require('./Even Or Odd');

describe("Even Or Odd Array", function () {
    it("1", function () {
        assert(((isOddOrEven({ age: 20 })) === undefined));
    });
    it("2", function () {
        assert(((isOddOrEven(['s'])) === undefined));
    });
    it("3", function () {
        assert(((isOddOrEven(5)) === undefined));
    });
    it("4", function () {
        assert(((isOddOrEven(5.5)) === undefined));
    });



    it("5", function () {
        assert(((isOddOrEven('Test')) === 'even'));
    });
    it("6", function () {
        assert(((isOddOrEven('Testing')) === 'odd'));
    });
    it("7", function () {
        assert(((isOddOrEven('')) === 'even'));
    });
    it("8", function () {
        assert(((isOddOrEven('s')) === 'odd'));
    });
});
