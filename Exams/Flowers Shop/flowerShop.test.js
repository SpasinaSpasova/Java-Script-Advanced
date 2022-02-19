const { assert, expect } = require("chai");
const flowerShop = require('./flowerShop.js');

describe("Tests flower shop", function () {
    describe("calculate Price Of Flowers", function () {
        it("test 1st arg 1", function () {
            expect(() => flowerShop.calcPriceOfFlowers(2, 2, 2).to.throw('Invalid input!'));
        });
        it("test 1st arg 2", function () {
            expect(() => flowerShop.calcPriceOfFlowers(2.2222, 2, 2).to.throw('Invalid input!'));
        });
        it("test 1st arg 3", function () {
            expect(() => flowerShop.calcPriceOfFlowers(['a'], 2, 2).to.throw('Invalid input!'));
        });
        it("test 1st arg 4", function () {
            expect(() => flowerShop.calcPriceOfFlowers({ flower: 'cvete' }, 2, 2).to.throw('Invalid input!'));
        });
        //-----------------------
        it("test 2nd arg 1", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', '2', 2).to.throw('Invalid input!'));
        });
        it("test 2nd arg 2", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', [2], 2).to.throw('Invalid input!'));
        });
        it("test 2nd arg 3", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', { num: 2 }, 2).to.throw('Invalid input!'));
        });
        it("test 2nd arg 4", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', 2.2, 2).to.throw('Invalid input!'));
        });

        //--------------
        it("test 3rd arg 1", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', 2, 2.2).to.throw('Invalid input!'));
        });
        it("test 3rd arg 2", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', 2, '2.2').to.throw('Invalid input!'));
        });
        it("test 3rd arg 3", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', 2, [2]).to.throw('Invalid input!'));
        });
        it("test 3rd arg 4", function () {
            expect(() => flowerShop.calcPriceOfFlowers('liliq', 2, { num: 2.2 }).to.throw('Invalid input!'));
        });
        //--------
        it("test valid", function () {
            let result = flowerShop.calcPriceOfFlowers('liliq', 2, 2);
            assert.equal(result, 'You need $4.00 to buy liliq!');
        });
        it("test valid with zero", function () {
            let result = flowerShop.calcPriceOfFlowers('liliq', 0, 2);
            assert.equal(result, 'You need $0.00 to buy liliq!');
        });
    });
    describe("check Flowers Available", function () {
        it("not available", function () {
            let result = flowerShop.checkFlowersAvailable('Kitka', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Kitka are sold! You need to purchase more!');
        });
        it("available", function () {
            let result = flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Rose are available!');
        });
    });
    describe("sell Flowers", function () {
        it("Garden is not array 1", function () {
            expect(() => flowerShop.sellFlowers({},2).to.throw('Invalid input!'));
        });
        it("Garden is not array 2", function () {
            expect(() => flowerShop.sellFlowers('kitka',2).to.throw('Invalid input!'));
        });
        it("Garden is not array 3", function () {
            expect(() => flowerShop.sellFlowers(3,2).to.throw('Invalid input!'));
        });
        it("Invalid space 1", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0).to.throw('Invalid input!'));
        });
        it("Invalid space 2", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],4).to.throw('Invalid input!'));
        });
        it("Invalid space 3", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],3).to.throw('Invalid input!'));
        });
        it("Invalid space 4", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-3).to.throw('Invalid input!'));
        });
        it("Invalid space 5", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'-2').to.throw('Invalid input!'));
        });
        it("Invalid space 6", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],[2]).to.throw('Invalid input!'));
        });
        it("Invalid space 7", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],{}).to.throw('Invalid input!'));
        });

        it("valid 1", function () {
            let result=flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1);
            assert.equal(result,'Rose / Orchid');
        });
        it("valid 2", function () {
            let result=flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2);
            assert.equal(result,'Rose / Lily');
        });
        it("valid 3", function () {
            let result=flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0);
            assert.equal(result,'Lily / Orchid');
        });
        it("valid 4", function () {
            let result=flowerShop.sellFlowers(["Rose","Orchid"],0);
            assert.equal(result,'Orchid');
        });
        it("valid 5", function () {
            let result=flowerShop.sellFlowers(["Rose","Orchid"],1);
            assert.equal(result,'Rose');
        });
        it("valid 6", function () {
            let result=flowerShop.sellFlowers(["Rose"],0);
            assert.equal(result,'');
        });
    });
});
