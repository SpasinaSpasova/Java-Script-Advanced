const { assert, expect } = require("chai");
const PaymentPackage = require('./Payment Package');

describe("PaymentPackage Test", function () {

    //test constructor
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);

        assert.equal(instance._name, 'Name', '1');
        assert.equal(instance._value, 100, '3');
        assert.equal(instance._VAT, 20, '4');
        assert.equal(instance._active, true, '5');
    });

    let pp = new PaymentPackage('spasina', 22);
    it("1", function () {
        assert((pp.name === 'spasina'));
    });
    it("2", function () {
        assert((pp.value === 22));
    });
    it("3", function () {
        assert((pp.VAT === 20));
    });
    it("4", function () {
        assert((pp.active === true));
    });


    it("5", function () {
        expect(() => new PaymentPackage(['spasina'], 22)).to.throw('Name must be a non-empty string');
    });
    it("6", function () {
        expect(() => new PaymentPackage(12, 22)).to.throw('Name must be a non-empty string');
    });
    it("7", function () {
        expect(() => new PaymentPackage({}, 22)).to.throw('Name must be a non-empty string');
    });
    it("8", function () {
        expect(() => new PaymentPackage(2.2, 22)).to.throw('Name must be a non-empty string');
    });
    it("9", function () {
        expect(() => new PaymentPackage('', 22)).to.throw('Name must be a non-empty string');
    });




    it("10", function () {
        expect(() => new PaymentPackage('spasina', 'spasina')).to.throw('Value must be a non-negative number');
    });
    it("11", function () {
        expect(() => new PaymentPackage('spasina', '')).to.throw('Value must be a non-negative number');
    });
    it("12", function () {
        expect(() => new PaymentPackage('spasina', [])).to.throw('Value must be a non-negative number');
    });
    it("13", function () {
        expect(() => new PaymentPackage('spasina',{})).to.throw('Value must be a non-negative number');
    });
    it("14", function () {
        expect(() => new PaymentPackage('spasina',-6)).to.throw('Value must be a non-negative number');
    });

    

    it("15", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.VAT = 'abc').to.throw('VAT must be a non-negative number');
    });
    it("16", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.VAT = '').to.throw('VAT must be a non-negative number');
    });
    it("17", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.VAT = -2).to.throw('VAT must be a non-negative number');
    });
    it("18", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.VAT = []).to.throw('VAT must be a non-negative number');
    });
    it("19", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.VAT = {}).to.throw('VAT must be a non-negative number');
    });

  

    it("20", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.active = {}).to.throw('Active status must be a boolean');
    });
    it("21", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.active = []).to.throw('Active status must be a boolean');
    });
    it("22", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.active = -5).to.throw('Active status must be a boolean');
    });
    it("23", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.active = 5).to.throw('Active status must be a boolean');
    });
    it("24", function () {
        let pp1 = new PaymentPackage('spasina', 22);
        expect(() => pp1.active = '5').to.throw('Active status must be a boolean');
    });

    //test to string method

    it('25', () => {
        let flagClass = new PaymentPackage('abc', 123);
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });


    it('26', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('27', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('28', () => {
        let flagClass = new PaymentPackage('abc', 123);
        flagClass.VAT = 30;
        flagClass.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(flagClass.toString()).to.equal(output.join('\n'));
    });
    
    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
    });
  
});