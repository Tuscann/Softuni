/**
 * Created by az on 11/9/16.
 */
let expect = require('chai').expect;
let list = (function () {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
})();

//Unit test with Mocha
describe('Test cases for testList object functions', function () {
    // uncomment bellow to complete all tests inside webstorm
    // let list;
    // beforeEach(function () {
    //     list = (function () {
    //         let data = [];
    //         return {
    //             add: function (item) {
    //                 data.push(item);
    //             },
    //             delete: function (index) {
    //                 if (Number.isInteger(index) && index >= 0 && index < data.length) {
    //                     return data.splice(index, 1)[0];
    //                 } else {
    //                     return undefined;
    //                 }
    //             },
    //             toString: function () {
    //                 return data.join(", ");
    //             }
    //         };
    //     })();
    // });

    it('should have add() function', () => {
        expect(list.hasOwnProperty('add')).to.equal(true);
        expect(typeof list.add).to.equal('function');
    });

    it('should have delete() function', () => {
        expect(list.hasOwnProperty('delete')).to.equal(true);
        expect(typeof list.delete).to.equal('function');
    });

    it('should have toString() function', () => {
        expect(list.hasOwnProperty('toString')).to.equal(true);
        expect(typeof list.toString).to.equal('function');
    });

    it('should be empty on init', () => {
        expect(list.toString()).to.equal('');
    });

    it('should add element on add(item)', () => {
        list.add(5);
        expect(list.toString()).to.equal('5');
    });

    it('should add elements of any type on add(item)', () => {
        list.add(5);
        list.add("six");
        list.add(false);
        expect(list.toString()).to.equal('5, six, false');
    });

    it('should return undefined on invalid number index on delete(index)', () => {
        list.add(5);
        expect(list.delete(15)).to.equal(undefined);
        expect(list.delete(-15)).to.equal(undefined);
    });

    it('should return undefined on invalid index on delete(index)', () => {
        list.add(5);
        expect(list.delete("index")).to.equal(undefined);
        expect(list.delete("0")).to.equal(undefined);
    });

    it('should successfully delete an item on delete(index)', () => {
        list.add(5);
        list.add("six");
        list.add(false);
        expect(list.delete(0)).to.equal(5);
        expect(list.delete(1)).to.equal(false);
        expect(list.delete(0)).to.equal("six");
    });

    it('should work correctly on this complex test', () => {
        let items = ['asd', 1, 15, 888, 14, {name: 'pesho'}, false, true, NaN, -0];
        for (let item of items) {
            list.add(item);
        }

        expect(list.toString()).to.equal('asd, 1, 15, 888, 14, [object Object], false, true, NaN, 0');
        expect(list.delete(0)).to.equal('asd');
        expect(list.delete(5)).to.equal(false);
        expect(list.delete(2)).to.equal(888);
        expect(list.toString()).to.equal('1, 15, 14, [object Object], true, NaN, 0');
    });
});