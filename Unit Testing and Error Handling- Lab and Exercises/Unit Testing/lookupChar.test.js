const { assert, expect } = require("chai");
const lookupChar = require('./Char Lookup');

describe("Char Lookup Test", function () {
    it("1", function () {
        assert(((lookupChar(5,6)) === undefined));
    });
    it("2", function () {
        assert(((lookupChar(5.5,6)) === undefined));
    });
    it("3", function () {
        assert(((lookupChar(['s'],6)) === undefined));
    });
    it("4", function () {
        assert(((lookupChar({age:20},6)) === undefined));
    });


    it("5", function () {
        assert(((lookupChar('hello',6.6)) === undefined));
    });
    it("6", function () {
        assert(((lookupChar('hello',[6.6])) === undefined));
    });
    it("7", function () {
        assert(((lookupChar('hello',{age:20})) === undefined));
    });
    it("8", function () {
        assert(((lookupChar('hello',{age:20})) === undefined));
    });
    it("9", function () {
        assert(((lookupChar('hello','6.6')) === undefined));
    });



    it("10", function () {
        assert(((lookupChar('',0)) === 'Incorrect index'));
    });
    it("11", function () {
        assert(((lookupChar('hello',-2)) === 'Incorrect index'));
    });
    it("12", function () {
        assert(((lookupChar('hello',10)) === 'Incorrect index'));
    });


    it("13", function () {
        assert(((lookupChar('hello',3)) === 'l'));
    });
    it("14", function () {
        assert(((lookupChar('h',0)) === 'h'));
    });

});