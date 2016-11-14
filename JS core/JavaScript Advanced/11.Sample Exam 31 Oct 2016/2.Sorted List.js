//Mocha
describe('Unit tests for SortedList class', function () {
    let list;
    beforeEach(function () {
        list = new SortedList();
    });

    function fillTheList(items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 50]) {
        for (let item of items) {
            list.add(item)
        }

        return items.length;
    }

    describe('Testing get() method', function () {
        it('should return the correct element on get(index)', () => {
            let elements = [1, 8, -52, -99, 44, 364, 1000, 1.8, -2, 3, 0.2245, 14, 44, 5, 61, 24, 5, 4714, 4, 4, 444, 4, 4, 1];
            elements = elements.sort((a, b) => a - b);
            fillTheList(elements);
            for (let i = 0; i < elements.length; i += 2) {
                expect(list.get(i)).to.equal(elements[i]);
            }
        });

        it('should throw an error on negative index provided', () => {
            fillTheList();
            expect(() => {
                list.get(-5)
            }).to.throw(Error);
        });

        it('should throw an error on invalid index provided', () => {
            fillTheList();
            expect(() => {
                list.get(500)
            }).to.throw(Error);
        });

        it('should throw an error on empty list', () => {
            expect(() => {
                list.get(0)
            }).to.throw(Error);
        });

        it('should throw an error on invalid index (the next index after last element)', () => {
            let firstInvalidIndex = fillTheList();
            expect(() => {
                list.get(firstInvalidIndex)
            }).to.throw(Error);
        });
    });

    describe('Testing remove() method', function () {
        it('should remove element on remove()', () => {
            list.add(5);
            expect(list.list.indexOf(5)).to.be.above(-1);
            list.remove(0);
            expect(list.list.indexOf(5)).to.equal(-1);
        });

        it('should remove and decrease size on remove()', () => {
            let size = fillTheList();
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
        });

        it('should remove and decrease size on remove() with floats', () => {
            let size = fillTheList([1.5, -85, -6.33, 3.14, -1, 0, 0, 0, 0]);
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
            list.remove(0);
            size--;
            expect(list.size).to.equal(size);
            expect(list.list.length).to.equal(size);
        });

        it('should throw an error on negative index provided', () => {
            fillTheList();
            expect(() => {
                list.remove(-5)
            }).to.throw(Error);
        });

        it('should throw an error on invalid index provided', () => {
            fillTheList();
            expect(() => {
                list.remove(500)
            }).to.throw(Error);
        });

        it('should throw an error on empty list', () => {
            expect(() => {
                list.remove(0)
            }).to.throw(Error);
        });

        it('should throw an error on invalid index (the next index after last element)', () => {
            let firstInvalidIndex = fillTheList();
            expect(() => {
                list.remove(firstInvalidIndex)
            }).to.throw(Error);
        });
    });

    describe('Testing add() method', function () {
        it('should work with negative integers', () => {
            list.add(-5);
            list.add(-58);
            list.add(-15);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            expect(list.get(0)).to.equal(-58);
        });

        it('should work with float values', () => {
            list.add(2.5);
            list.add(1.13);
            list.add(0.00001);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            expect(list.get(0)).to.equal(0.00001);
        });

        it('should work with integers values', () => {
            list.add(2);
            list.add(1);
            list.add(30);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            expect(list.get(0)).to.equal(1);
        });

        it('should contain the element after add()', () => {
            list.add(5);
            expect(list.list.indexOf(5)).to.be.above(-1);
            expect(list.list.indexOf(5)).to.equal(0);
        });

        it('should add and increase size on add()', () => {
            expect(list.size).to.equal(0);
            expect(list.list.length).to.equal(0);
            list.add(5);
            expect(list.size).to.equal(1);
            expect(list.list.length).to.equal(1);
            list.add(10);
            expect(list.size).to.equal(2);
            expect(list.list.length).to.equal(2);
        });

        it('should add and increase size on add() with many additions', () => {
            for (let i = 0; i < 100; i++) {
                list.add(i + 55.2);
                expect(list.size).to.equal(i + 1);
                expect(list.list.length).to.equal(i + 1);
            }
        });

        it('should add and increase size on add() with floats', () => {
            expect(list.size).to.equal(0);
            expect(list.list.length).to.equal(0);
            list.add(5.8);
            list.add(88.8);
            list.add(0.8);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            list.add(10);
            expect(list.size).to.equal(4);
            expect(list.list.length).to.equal(4);
        });

        it('should add and keep the collection sorted', () => {
            let elements = [5, 18, -55, -600, 2.5, 13];
            let sortedElements = elements.sort((a, b) => a - b);
            for (let i = 0; i < elements.length; i++) {
                list.add(elements[i]);
                expect(list.list[i]).to.equal(sortedElements[i]);
            }
        });
    });

    describe('Testing if elements are sorted all the time', function () {
        it('should be sorted after add()', () => {
            let itemsList = [50, -5200, 0, 3, 2, 1, -1];
            fillTheList(itemsList);
            itemsList = itemsList.sort((a, b) => a - b);
            for (let i = 0; i < itemsList.length; i++) {
                expect(list.get(i)).to.equal(itemsList[i]);
            }
        });

        it('should be sorted after add() and delete()', () => {
            let itemsList = [50, -5200, 0, 3, 2, 1, -1];
            fillTheList(itemsList);
            itemsList = itemsList.sort((a, b) => a - b);
            for (let i = 0; i < itemsList.length; i++) {
                expect(list.get(i)).to.equal(itemsList[i]);
            }

            for (let i = 0; i < itemsList.length; i += 2) {
                list.remove(i);
                itemsList.splice(i, 1);
            }

            for (let i = 0; i < itemsList.length; i++) {
                expect(list.get(i)).to.equal(itemsList[i]);
            }
        });

        it('should be sorted after add() with floats', () => {
            let itemsList = [1.2, 2.8, 0.01, 55.6, 0, 5];
            fillTheList(itemsList);
            itemsList = itemsList.sort((a, b) => a - b);
            for (let i = 0; i < itemsList.length; i++) {
                expect(list.get(i)).to.equal(itemsList[i]);
            }
        });
    });

    describe('Testing size property', function () {
        it('should be empty on init (return size = 0)', () => {
            let expectedSize = 0;
            expect(list.size).to.equal(expectedSize);
        });

        it('should maintain a proper size after add()', () => {
            let expectedSize = fillTheList();
            expect(list.size).to.equal(expectedSize);
        });

        it('should maintain a proper size after add() remove()', () => {
            let expectedSize = fillTheList();
            for (let i = 0; i < 2; i++) {
                list.remove(0);
                expectedSize--;
            }

            expect(list.size).to.equal(expectedSize);
        });
    });

    describe('Testing some edge cases', function () {
        it('should contain method add', () => {
            expect(SortedList.prototype).to.have.property('add');
        });

        it('should contain method remove', () => {
            expect(SortedList.prototype).to.have.property('remove');
        });

        it('should contain method get', () => {
            expect(SortedList.prototype).to.have.property('get');
        });

        it('should contain method size', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });

        it('should contains numerics only', () => {
            let size = fillTheList();
            for (let i = 0; i < size; i++) {
                expect(typeof list.get(i)).to.equal('number');
            }
        });

        it('should be instance of itself', () => {
            expect(list instanceof SortedList).to.be.equal(true);
        });

        it('it should hold numbers only', () => {
            list.add(5);
            list.add(50);
            list.add(500);
            expect(!list.list.some(isNaN)).to.be.equal(true);
        })
    });
});