const assert = require("chai").assert;
const isSymmetric = require('./Check for Symmetry');

describe("Symmetry Array", function () {
    it("1", function () {
        assert(((isSymmetric({age:20}))==false));           
    });
    it("2", function () {
        assert(((isSymmetric([1,2,1]))==true));           
    });
    it("3", function () {
        assert(((isSymmetric([1,1,'1']))==false));           
    });  
    it("4", function () {
        assert(((isSymmetric([]))==true));           
    });   
});