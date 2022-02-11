const assert = require("chai").assert;
const sum = require('./Sum of Numbers');

describe("Sum Numbers Tests", function (arr) {
    it("Corect Sum",function(){
        let array=[1,2,3];
        let expectedSum=6;
        let actualSum=sum(array);
        assert.equal(actualSum,expectedSum,'CorrectSum');
    });
    it("Negative Numbers in Array",function(){
        let array=[1,-2,-3];
        let expectedSum=-4;
        let actualSum=sum(array);
        assert.equal(actualSum,expectedSum,'CorrectNegativeSum');
    });
    it("Zero result",function(){
        let array=[1,2,-3];
        let expectedSum=0;
        let actualSum=sum(array);
        assert.equal(actualSum,expectedSum,'CorrectZeroSum');
    });
    it("Zero result2",function(){
        let array=[0];
        let expectedSum=0;
        let actualSum=sum(array);
        assert.equal(actualSum,expectedSum,'CorrectZeroSum2');
    });
    it("Empty array",function(){
        let array=[];
        let expectedSum=0;
        let actualSum=sum(array);
        assert.equal(actualSum,expectedSum,'Empty');
    });
});