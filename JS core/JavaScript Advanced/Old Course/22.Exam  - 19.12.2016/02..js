let makeList = require('./solved');
let expect = require('chai').expect;

// function makeList() {
//     let data = [];
//     return {
//         addLeft: function(item) {
//             data.unshift(item);
//         },
//         addRight: function(item) {
//             data.push(item);
//         },
//         clear: function() {
//             data = [];
//         },
//         toString: function() {
//             return data.join(", ");
//         }
//     };
// }
// module.exports = makeList;


describe("Pointy List", function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("should contain all properties", function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    it("should start empty", function () {
        expect(myList.toString()).to.equal("");
    });

    it("can add on the left", function () {
        myList.addLeft("item");
        expect(myList.toString()).to.equal("item");
    });

    it("can add on the right", function () {
        myList.addRight("item");
        expect(myList.toString()).to.equal("item");
    });

    it("can add multiple on the left", function () {
        myList.addLeft("anchor");
        myList.addLeft("item1");
        myList.addLeft("item2");
        expect(myList.toString()).to.equal("item2, item1, anchor");
    });

    it("can add multiple on the right", function () {
        myList.addRight("anchor");
        myList.addRight("item1");
        myList.addRight("item2");
        expect(myList.toString()).to.equal("anchor, item1, item2");
    });

    it("should clear all items", function () {
        myList.addRight("item");
        myList.addRight("item");
        myList.clear();
        expect(myList.toString()).to.equal("");
    });
});