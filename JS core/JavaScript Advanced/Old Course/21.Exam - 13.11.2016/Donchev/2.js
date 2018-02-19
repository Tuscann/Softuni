let createList = require('./2list');
let expect = require('chai').expect;

describe('Unit tests for createList() function', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('Instance specific tests', function () {
        it('Should have add() function', () => {
            expect(list.hasOwnProperty('add')).to.equal(true);
            expect(typeof list.add).to.equal('function');
        });

        it('Should have shiftLeft() function', () => {
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
            expect(typeof list.shiftLeft).to.equal('function');
        });

        it('Should have shiftRight() function', () => {
            expect(list.hasOwnProperty('shiftRight')).to.equal(true);
            expect(typeof list.shiftRight).to.equal('function');
        });

        it('Should have swap() function', () => {
            expect(list.hasOwnProperty('swap')).to.equal(true);
            expect(typeof list.swap).to.equal('function');
        });

        it('Should have toString() function', () => {
            expect(list.hasOwnProperty('toString')).to.equal(true);
            expect(typeof list.toString).to.equal('function');
        });
    });

    describe('Testing add() function', function () {
        it('Should add element on empty list', () => {
            list.add(5);
            expect(list.toString()).to.equal('5');
        });

        it('Should add elements correctly', () => {
            list.add('5');
            list.add('hi');
            list.add(100);
            list.add(false);
            expect(list.toString()).to.equal('5, hi, 100, false');
        });
    });

    describe('Testing shiftLeft() function', function () {
        it('Should do nothing on empty list', () => {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });

        it('Should do nothing on 1 element list', () => {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5');
        });

        it('Should correctly shift all elements', () => {
            list.add(5);
            list.add(6);
            list.add(7);

            expect(list.toString()).to.equal('5, 6, 7');
            list.shiftLeft();
            expect(list.toString()).to.equal('6, 7, 5');
        });
    });

    describe('Testing shiftRight() function', function () {
        it('Should do nothing on empty list', () => {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });

        it('Should do nothing on 1 element list', () => {
            list.add(5.2);
            list.shiftRight();
            expect(list.toString()).to.equal('5.2');
        });

        it('Should correctly shift all elements', () => {
            list.add(5.1);
            list.add(6.1);
            list.add(7.1);

            expect(list.toString()).to.equal('5.1, 6.1, 7.1');
            list.shiftRight();
            expect(list.toString()).to.equal('7.1, 5.1, 6.1');
        });
    });

    describe('Testing swap() function', function () {
        it('Should swap correctly 2 items and return true', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(0, 2);
            expect(list.toString()).to.equal('3, 2, 1');
            expect(result).to.equal(true);
        });

        it('Should swap correctly 2 items and return true', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(2, 0);
            expect(list.toString()).to.equal('3, 2, 1');
            expect(result).to.equal(true);
        });

        it('Should NOT swap on same indices', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(1, 1);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });

        it('Should NOT swap on negative index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(1, -1);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });

        it('Should NOT swap on non-integer (float) index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(0, 2.1);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });

        it('Should NOT swap on non-integer (other) index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap({}, 0);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });

        it('Should NOT swap on out-of-range (edge case: at the exact end) index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(0, 3);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });

        it('Should NOT swap on out-of-range index', () => {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(1000, 3);
            expect(list.toString()).to.equal('1, 2, 3');
            expect(result).to.equal(false);
        });
    });

    describe('Testing toString() function', function () {
        it('Should return empty string on empty list', () => {
            expect(list.toString()).to.equal('');
        });

        it('Should return correct list', () => {
            list.add('one');
            list.add(2);
            list.add({index: 3});
            expect(list.toString()).to.equal('one, 2, [object Object]');
        });
    });
});