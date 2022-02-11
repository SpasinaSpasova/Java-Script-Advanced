const assert = require("chai").assert;
const createCalculator = require('./AddandSubtract');

describe("Calculator Tests", function () {

    let funct='';

    beforeEach(function () {
        funct = createCalculator();
    });

    it("return 0 ", function () {
        assert(funct.get()=== 0);
    });
    it("return 0 with add zeroes", function () {
        funct.add(0);
        assert(funct.get()=== 0);
    });
    it("return 0 with subtract zeroes", function () {
        funct.subtract(0);
        assert(funct.get()=== 0);
    });
    it("return -10 with subtract ", function () {
        funct.subtract(10);
        assert(funct.get()=== -10);
    });
    it("return 10 with add 10", function () {
        funct.add(10);
        assert(funct.get()=== 10);
    });
    it("return -2 with subtract '2'", function () {
        funct.subtract('2');
        assert(funct.get()=== -2);
    });
    it("return 20 with subtract '-20'", function () {
        funct.subtract('-20');
        assert(funct.get()=== 20);
    });
    it('return undefined adding string', function() {        
        assert(funct.add('spasina')===undefined);
    });
    it('dificult test', function() {        
         funct.add(20);
         funct.subtract('-50');
         funct.add('15');
        let value = funct.get();
        assert.equal(value,85);
    });
});