let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("createList()", function () {
    let list = [];
    beforeEach(function () {
        list = createList();
    });

    describe("properties", function () {
        it("1: should have all properties", function () {
            expect(list.hasOwnProperty('add')).to.equal(true);
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
            expect(list.hasOwnProperty('shiftRight')).to.equal(true);
            expect(list.hasOwnProperty('swap')).to.equal(true);
            expect(list.hasOwnProperty('toString')).to.equal(true);
        });
    });

    describe("toString()", function () {
        it("1: should print string representation of the list - with empty list", function () {
            expect(list.toString()).to.equal('');
        });
    });

    describe("add()", function () {
        it("1: should add element", function () {
            list.add(1);
            expect(list.toString()).to.equal('1');
        });

        it("2: should add element at the end of the list", function () {
            list.add(1);
            list.add(2);
            expect(list.toString()).to.equal('1, 2');
        });

        it("3: should add element with different types of elements", function () {
            list.add(1);
            list.add("two");
            list.add({name: "Roli"});
            list.add({age: 29});
            expect(list.toString()).to.equal('1, two, [object Object], [object Object]');
        });

        it("4: should add element at the end of the list", function () {
            list.add();
            expect(list.toString()).to.equal('');
        });

        it("5: should add element at the end of the list", function () {
            list.add(1);
            list.add('');
            expect(list.toString()).to.equal('1, ');
        });

    });

    describe("shiftLeft()", function () {
        it("1: with empty list", function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');
        });

        it("2: with 1 element", function () {
            list.add("Roli");
            list.shiftLeft();
            expect(list.toString()).to.equal('Roli');
        });

        it("3: with different elements", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftLeft();
            expect(list.toString()).to.equal('Roli, one,two,three, 1');
        });

        it("4: with multiple shifts", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftLeft();
            expect(list.toString()).to.equal('Roli, one,two,three, 1');
            list.shiftLeft();
            expect(list.toString()).to.equal('one,two,three, 1, Roli');
        });

        it("5: with full multiple shifts", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftLeft();
            expect(list.toString()).to.equal('Roli, one,two,three, 1');
            list.shiftLeft();
            expect(list.toString()).to.equal('one,two,three, 1, Roli');
            list.shiftLeft();
            expect(list.toString()).to.equal('1, Roli, one,two,three');
        });
    });

    describe("shiftRight()", function () {
        it("1: with empty list", function () {
            list.shiftRight();
            expect(list.toString()).to.equal('');
        });

        it("2: with 1 element", function () {
            list.add("Roli");
            list.shiftRight();
            expect(list.toString()).to.equal('Roli');
        });

        it("3: with different elements", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftRight();
            expect(list.toString()).to.equal('one,two,three, 1, Roli');
        });

        it("4: with multiple shifts", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftRight();
            expect(list.toString()).to.equal('one,two,three, 1, Roli');
            list.shiftRight();
            expect(list.toString()).to.equal('Roli, one,two,three, 1');

        });

        it("4: with full multiple shifts", function () {
            list.add(1);
            list.add('Roli');
            list.add(['one', 'two', 'three']);

            list.shiftRight();
            expect(list.toString()).to.equal('one,two,three, 1, Roli');
            list.shiftRight();
            expect(list.toString()).to.equal('Roli, one,two,three, 1');
            list.shiftRight();
            expect(list.toString()).to.equal('1, Roli, one,two,three');
        });
    });

    describe("swap()", function () {
        it("1: should return empty string for empty list", function () {
            expect(list.swap(0, 1)).to.equal(false);
            expect(list.toString()).to.equal('');
        });

        it("2: with invalid indexes (strings) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap("first", "second")).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("3: with invalid indexes (arrays) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap([1], [0])).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("3: with invalid indexes (outside bounds) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(-8, 16)).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("4: with invalid indexes (outside bounds) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(15, 6)).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("5: with invalid indexes (outside bounds) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(0, 6)).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("6: with invalid indexes (outside bounds) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(-8, 2)).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("7: with invalid indexes (equal indexes) - should not swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(0, 0)).to.equal(false);
            expect(list.toString()).to.equal('1.4, 5.3, eighteen');
        });

        it("8: with valid indexes - should swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('5.3, 1.4, eighteen');
        });

        it("9: with valid indexes - should swap elements", function () {
            list.add(1.4);
            list.add(5.3);
            list.add("eighteen");
            expect(list.swap(2, 0)).to.equal(true);
            expect(list.toString()).to.equal('eighteen, 5.3, 1.4');
        });

        it("10: with valid indexes - should swap elements", function () {
            list.add('string');
            list.add('mring');
            list.add("eighteen");
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('mring, string, eighteen');
        });

        it("11: with valid indexes - should swap elements", function () {
            list.add('1');
            expect(list.swap(0, 1)).to.equal(false);
            expect(list.toString()).to.equal('1');
        });

        it("12: with one indexe - should not swap elements", function () {
            list.add('1');
            list.add('2');
            expect(list.swap(0)).to.equal(false);
            expect(list.toString()).to.equal('1, 2');
        });

        it("13: with valid indexes - should swap elements", function () {
            list.add('1');
            list.add('2');
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('1, 2');
        });

        it("14: with valid indexes - should swap elements", function () {
            list.add([1, 2, 3]);
            list.add([4, 5, 6]);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('4,5,6, 1,2,3');
        });

        it("15: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(0, '1')).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("16: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap('0', 1)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("16: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(-1, 1)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("17: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(0, -1)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("18: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(-1, -1)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("19: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(16, 0)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("19: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(0, 16)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });

        it("19: with valid indexes - should swap elements", function () {
            list.add('mbuu');
            list.add('kur');
            expect(list.swap(18, 16)).to.equal(false);
            expect(list.toString()).to.equal('mbuu, kur');
        });
    });

    describe("shiftLeft() + shiftRight", function () {
        it("1: should return same list", function () {
            list.add(1);
            list.add(2);
            list.add(3);

            list.shiftLeft();
            list.shiftRight();

            expect(list.toString()).to.equal('1, 2, 3')
        });

        it("2: should shift elements", function () {
            list.add(1);
            list.add(2);
            list.add(3);

            list.shiftLeft();
            list.shiftRight();
            list.shiftLeft();

            expect(list.toString()).to.equal('2, 3, 1')
        });

        it("3: should shift elements", function () {
            list.add(1);
            list.add(2);
            list.add(3);

            list.shiftRight();
            list.shiftLeft();
            list.shiftRight();

            expect(list.toString()).to.equal('3, 1, 2')
        });
    });

    describe("shiftLeft() + swap()", function () {
        it("1: should shift elements and then swap them", function () {
            list.add(1);
            list.add(2);
            list.add(3);

            list.shiftLeft(); // 2, 3, 1

            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('3, 2, 1');
        })
    });

});