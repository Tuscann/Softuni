let createCalculator = require('../04_Add_Subtract_31.10.16').crateCalculator;
let expect = require('chai').expect;

let calculator;
beforeEach(function(){
    calculator = createCalculator();;
});

describe("Tests for calculator", function() {

    //Check for main functions existence
    it("should have get() function", function () {
        let hasProp = calculator.hasOwnProperty('get');
        expect(hasProp).to.be.true;
    });

    it("should have subtract() function", function(){
        let hasProp = calculator.hasOwnProperty('subtract');
        expect(hasProp).to.be.true;
    });

    it("should have add() function", function(){
        let hasProp = calculator.hasOwnProperty('add');
        expect(hasProp).to.be.true;
    });

    it("should return 0 for get", function(){
        let value = calculator.get();
        expect(value).to.be.equal(0);
    })

    it('should return 5 on {add "5";}', () => {
        calculator.add("5");
        let value = calculator.get();
        expect(value).to.equal(5);
    });

    it("should return -5 after (add(-5))", function(){
        calculator.add(-5);
        let value = calculator.get();
        expect(value).to.be.equal(-5);
    })

    it("should return 2 after (add(10); subtract('7'); add('-2'); subtract(-1)", function(){
        calculator.add(10);
        calculator.subtract('7');
        calculator.add(-2);
        calculator.subtract('-1');
        let value = calculator.get();
        expect(value).to.be.equal(2);
    })

    it("should return 4.2 after(add(5.3); subtract(1.1))", function(){
        calculator.add(5.3);
        calculator.subtract(1.1);
        let value = calculator.get();
        expect(value).to.be.equal(4.199999999999999);
    })

    it("should return NaN after (add('hello))", function(){
        calculator.add("hello");
        let value = calculator.get();
        expect(value).to.be.NaN;
    })

    it("should return NaN after (subtract('hello')", function(){
        calculator.subtract('hello');
        let value = calculator.get();
        expect(value).to.be.NaN
    })

    it("should return NaN after add empty input", function(){
        calculator.add()
        let value = calculator.get();
        expect(value).to.be.NaN
    })

    it("should return NaN after subtract of empty input", function(){
        calculator.subtract()
        let value = calculator.get();
        expect(value).to.be.NaN
    })
});