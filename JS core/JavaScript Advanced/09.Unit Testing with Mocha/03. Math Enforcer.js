let mathEnforcer = require('../mathEnforcer').mathEnforcer;
let expect = require('chai').expect;
let assert = require('chai').assert;

describe("mathEnforcer",function () {
    describe('addFive', function () {
        it('with a non-number parametre,should return correctesult', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });
        it('with a number parametre,should return close to 6 after 1.999', function () {
            assert.closeTo(mathEnforcer.addFive(1.999),6.999,Number(0.1));
        });
        it('with a number parametre,should return correctesult', function () {
            expect(mathEnforcer.addFive(5)).to.equal(5+5);
        });
        it('with a negative number parametre,should return correctesult', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('with a zero parametre,should return correctesult', function () {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

    });

    describe('subtractTen', function () {
        it('with a non-number parametre,should return correct result', function () {
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
        });
        it('with a number parametre,should return correct result', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('with a negative number parametre,should return correct result', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('with a number parametre,should return close to 6 after 1.999', function () {
            assert.closeTo(mathEnforcer.subtractTen(1.999),-8.001,Number(0.1));
        });
        it('with a zero parametre,should return correct result', function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });


    })

    describe('sum', function () {
        it('with a non-number parametre,should return correct result', function () {
            expect(mathEnforcer.sum('str', 'pesho')).to.equal(undefined);
        });
        it('with a non-number parametre,should return correct result', function () {
            expect(mathEnforcer.sum('str', 5)).to.equal(undefined);
        });
        it('with a non-number parametre,should return correct result', function () {
            expect(mathEnforcer.sum(5, 'str')).to.equal(undefined);
        });
        it('with a number parametre,should return correct result', function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
        it('with a number parametre,should return close to 6 after 1.999', function () {
            assert.closeTo(mathEnforcer.sum(1.999,5),6.999,0.1);
        });
        it('with a negative number parametre,should return correct result', function () {
            expect(mathEnforcer.sum(5, -5)).to.equal(0);
        });
        it('with a negative number parametre,should return correct result', function () {
            expect(mathEnforcer.sum(-5, 5)).to.equal(0);
        });
        it('with a zero number parametre,should return correct result', function () {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });

    })
});