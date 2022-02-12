const { assert, expect } = require("chai");
const mathEnforcer = require('./Math Enforcer');

describe("Char Lookup Test", function () {

    //addFive
    it("1", function () {
        assert(((mathEnforcer.addFive('s')) === undefined));
    });
    it("2", function () {
        assert(((mathEnforcer.addFive([5])) === undefined));
    });
    it("3", function () {
        assert(((mathEnforcer.addFive({ age: 5 })) === undefined));
    });



    it("4", function () {
        assert(((mathEnforcer.addFive(5)) === 10));
    });
    it("5", function () {
        assert(((mathEnforcer.addFive(-5)) === 0));
    });
    it("6", function () {
        assert(((mathEnforcer.addFive(2.2)) === 7.2));
    });
    it("7", function () {
        assert(((mathEnforcer.addFive(0)) === 5));
    });



    //subtractTen
    it("8", function () {
        assert(((mathEnforcer.subtractTen('s')) === undefined));
    });
    it("9", function () {
        assert(((mathEnforcer.subtractTen([5])) === undefined));
    });
    it("10", function () {
        assert(((mathEnforcer.subtractTen({ age: 5 })) === undefined));
    });



    it("11", function () {
        assert(((mathEnforcer.subtractTen(5)) === -5));
    });
    it("12", function () {
        assert(((mathEnforcer.subtractTen(-5)) === -15));
    });
    it("13", function () {
        assert(((mathEnforcer.subtractTen(2.2)) === -7.8));
    });
    it("14", function () {
        assert(((mathEnforcer.subtractTen(0)) === -10));
    });



    //sum
    it("15", function () {
        assert(((mathEnforcer.sum('s',2)) === undefined));
    });
    it("16", function () {
        assert(((mathEnforcer.sum([5],2)) === undefined));
    });
    it("17", function () {
        assert(((mathEnforcer.sum({ age: 5 },2)) === undefined));
    });

    it("18", function () {
        assert(((mathEnforcer.sum(2,'s')) === undefined));
    });
    it("19", function () {
        assert(((mathEnforcer.sum(2,[5])) === undefined));
    });
    it("20", function () {
        assert(((mathEnforcer.sum(2,{ age: 5 })) === undefined));
    });

    it("21", function () {
        assert(((mathEnforcer.sum(5,5)) === 10));
    });
    it("22", function () {
        assert(((mathEnforcer.sum(-5,-5)) === -10));
    });
    it("23", function () {
        assert(((mathEnforcer.sum(2.2,2.2)) === 4.4));
    });
    it("24", function () {
        assert(((mathEnforcer.sum(0,0)) === 0));
    });
    it("25", function () {
        assert(((mathEnforcer.sum(10,-20)) === -10));
    });
    it("26", function () {
        assert(((mathEnforcer.sum(-10,10)) === 0));
    });
});