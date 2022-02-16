const { assert, expect } = require("chai");
const library = require('./library.js');

describe("Tests library", function () {

    describe("CalcPriceOfBook", function () {
        it("invalid name of book 1", function () {
            expect(() => library.calcPriceOfBook(5, 10)).to.throw('Invalid input')
        });
        it("invalid name of book 2", function () {
            expect(() => library.calcPriceOfBook([], 10)).to.throw('Invalid input')
        });
        it("invalid name of book 3", function () {
            expect(() => library.calcPriceOfBook({}, 10)).to.throw('Invalid input')
        });
        it("invalid year 1", function () {
            expect(() => library.calcPriceOfBook('The notebook', '5')).to.throw('Invalid input')
        });
        it("invalid year 2", function () {
            expect(() => library.calcPriceOfBook('The notebook', [])).to.throw('Invalid input')
        });
        it("invalid year 3", function () {
            expect(() => library.calcPriceOfBook('The notebook', {})).to.throw('Invalid input')
        });
        it("Valid year = 1980", function () {
            let result = library.calcPriceOfBook('The notebook', 1980)
            assert.equal(result, 'Price of The notebook is 10.00')
        });
        it("Valid year < 1980", function () {
            let result = library.calcPriceOfBook('The notebook', 1979)
            assert.equal(result, 'Price of The notebook is 10.00')
        });
        it("Valid year > 1980", function () {
            let result = library.calcPriceOfBook('The notebook', 1981)
            assert.equal(result, 'Price of The notebook is 20.00')
        });
    });
    describe("FindBook", function () {
        it("Empty array", function () {
            assert.throws(() => library.findBook([], 'The notebook'), 'No books currently available')
            
        });
        it("Book is missing", function () {
            expect(library.findBook(['Before we met'], 'The notebook')).to.equal('The book you are looking for is not here!');
        });

        it("Book is in the array", function () {
            expect(library.findBook(['Before we met', 'The notebook'], 'The notebook')).to.equal('We found the book you want.');
        });

    });
    describe("ArrangeTheBooks", function () {
       
        it("Count book is not a number 1", function () {
            expect(()=>library.arrangeTheBooks('5')).to.throw('Invalid input');
         });
         it("Count book is not a number 2", function () {
            expect(()=>library.arrangeTheBooks([])).to.throw('Invalid input');
         });
         it("Count book is not a number 3", function () {
            expect(()=>library.arrangeTheBooks({})).to.throw('Invalid input');
         });
         it("Count book is a negative number", function () {
            expect(()=>library.arrangeTheBooks(-2)).to.throw('Invalid input');
         });
         it("Count book == 40 ", function () {
             let result=library.arrangeTheBooks(40)
            assert.equal(result, 'Great job, the books are arranged.');

         });
         it("Count book < 40 ", function () {
             let result=library.arrangeTheBooks(39);
          assert.equal(result, 'Great job, the books are arranged.');
         });
         it("Count book > 40 ", function () {
            let result=library.arrangeTheBooks(41);
         assert.equal(result, 'Insufficient space, more shelves need to be purchased.');
        });
    });
});
