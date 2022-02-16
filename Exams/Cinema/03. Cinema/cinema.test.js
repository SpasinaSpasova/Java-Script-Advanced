const { assert, expect } = require("chai");
const cinema = require('./cinema.js');


describe("Tests Cinema", function() {

    describe("Show Movies", function() {
        it("Show Movies empty array", function() {
            let result=cinema.showMovies([]);
            assert.equal(result,'There are currently no movies to show.');
        });
        it("Show Movies array corect", function() {
            let result=cinema.showMovies(['a','b','c']);
            assert.equal(result,'a, b, c');
        });
     });
     describe("Ticket Price", function() {
        it("Ticket Price invalid projection type", function() {
            expect(()=>cinema.ticketPrice('StudentType')).to.throw('Invalid projection type.');
        });
        it("Ticket Price valid projection type 1", function() {
            let result=cinema.ticketPrice('Normal');
            assert.equal(result,7.50);
        });
        it("Ticket Price valid projection type 2", function() {
            let result=cinema.ticketPrice('Premiere');
            assert.equal(result,12.00);
        });
        it("Ticket Price valid projection type 3", function() {
            let result=cinema.ticketPrice('Discount');
            assert.equal(result,5.50);
        });
    });
    describe("Swap Seats In Hall", function() {
        it("Swap Seats In Hall invalid first place 1", function() {
            let result= cinema.swapSeatsInHall('',7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 2", function() {
            let result= cinema.swapSeatsInHall([],7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 3", function() {
            let result= cinema.swapSeatsInHall({},7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 4", function() {
            let result= cinema.swapSeatsInHall(0,7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 5", function() {
            let result= cinema.swapSeatsInHall(-2,7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 6", function() {
            let result= cinema.swapSeatsInHall(20,7);
            assert.equal(result,'Successful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid first place 7", function() {
            let result= cinema.swapSeatsInHall(21,7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });


        it("Swap Seats In Hall invalid second place 1", function() {
            let result= cinema.swapSeatsInHall(7,'');
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 2", function() {
            let result= cinema.swapSeatsInHall(7,[]);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 3", function() {
            let result= cinema.swapSeatsInHall(7,{});
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 4", function() {
            let result= cinema.swapSeatsInHall(7,0);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 5", function() {
            let result= cinema.swapSeatsInHall(7,-2);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 6", function() {
            let result= cinema.swapSeatsInHall(7,20);
            assert.equal(result,'Successful change of seats in the hall.');
        });
        it("Swap Seats In Hall invalid second place 7", function() {
            let result= cinema.swapSeatsInHall(7,21);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall equal places", function() {
            let result= cinema.swapSeatsInHall(7,7);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
        it("Swap Seats In Hall equal places 2", function() {
            let result= cinema.swapSeatsInHall([7],[7]);
            assert.equal(result,'Unsuccessful change of seats in the hall.');
        });
    });
});
