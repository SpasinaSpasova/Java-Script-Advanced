const assert = require("chai").assert;
const rgbToHexColor = require('./RGB to Hex');

describe("rgbToHexColor Tests", function () {
    it("red is number", function () {
        let red = 5;
        let green = 4;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) != undefined);
    });
    it("green is number", function () {
        let red = 5;
        let green = 4;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) != undefined);
    });
    it("blue is number", function () {
        let red = 5;
        let green = 4;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) != undefined);
    });
    it("blue is NOT number", function () {
        let red = 5;
        let green = 4;
        let blue = 'B';
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("red is NOT number", function () {
        let red = 'r';
        let green = 4;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("green is NOT number", function () {
        let red = 3;
        let green = 'g';
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("green is less than 0", function () {
        let red = 3;
        let green = -1;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("red is less than 0", function () {
        let red = -3;
        let green = 2;
        let blue = 7;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("blue is less than 0", function () {
        let red = 3;
        let green = 2;
        let blue = -7;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("blue is more than 255", function () {
        let red = 3;
        let green = 2;
        let blue = 256;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("red is more than 255", function () {
        let red = 256;
        let green = 2;
        let blue = 5;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("green is more than 255", function () {
        let red = 5;
        let green = 256;
        let blue = 5;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("1st correct with 255 in all", function () {
        let red = 255;
        let green = 255;
        let blue = 255;
        assert(rgbToHexColor(red, green, blue) !== undefined);
    });
    it("2nd correct with 0 in all", function () {
        let red = 0;
        let green = 0;
        let blue = 0;
        assert(rgbToHexColor(red, green, blue) !== undefined);
    });
    it("3rd different correct values", function () {
        let red = 0;
        let green = 255;
        let blue = 13;
        assert(rgbToHexColor(red, green, blue) !== undefined);
    });
    it("3rd different incorrect values", function () {
        let red = -1;
        let green = '255';
        let blue = 269;
        assert(rgbToHexColor(red, green, blue) === undefined);
    });
    it("check starts With '#0'", function () {     
        let red = 1;
        let green = 2;
        let blue = 4;
        assert(rgbToHexColor(red, green, blue).startsWith('#0')==true);      
    });
    it("check uppercase", function () {    
        let red = 16;
        let green = 27;
        let blue = 40;            
        assert(rgbToHexColor(red, green, blue)===rgbToHexColor(red, green, blue).toUpperCase());           
    });
    it("check with float numbers", function () {    
        let red = 16.2;
        let green = 27;
        let blue = 40;            
        assert(rgbToHexColor(red, green, blue)===undefined);           
    });
    it("check function works correct", function () {
        let red = 162;
        let green = 27;
        let blue = 40;   
        assert(rgbToHexColor(red, green,blue).length==7);           
    });
    it("chech that the result is correct", function () {
        let red = 158;
        let green = 178;
        let blue = 255;   
        assert(rgbToHexColor(158, 178,255)=='#9EB2FF');           
    });
});
