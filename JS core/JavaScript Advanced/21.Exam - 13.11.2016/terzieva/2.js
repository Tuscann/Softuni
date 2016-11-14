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

let expect = require('chai').expect;



describe('List tests', function () {
    let list = createList();
    beforeEach(function () {
        list = createList();
    });
    it('should return 1, 2, 3, 4', function () {
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(2);
        list.add(2);
        list.add(2);
        list.add('4:5,3');
        list.add(4);
        expect(list.toString()).to.equal('1, 2, 2, 2, 2, 2, 4:5,3, 4')
    });
    it('should return 1, 2, 3, 4', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4,5);
        expect(list.toString()).to.equal('1, 2, 3, 4')
    });
    it('should return 1, two, 5, cat', function () {
        list.add(1);
        list.add('two');
        list.add(5);
        list.add('cat');
        expect(list.toString()).to.equal('1, two, 5, cat')
    });
    it('should shift elements to the left', function () {
        list.add(1);
        list.add('two');
        list.add(5);
        list.add('cat');
        list.shiftLeft();
        list.shiftRight();
        expect(list.toString()).to.equal('1, two, 5, cat')
        expect(list.shiftLeft()).to.equal(undefined)
        expect(list.shiftRight()).to.equal(undefined);
        expect(list.swap(-1,4)).to.equal(false)
        expect(list.swap(1,4)).to.equal(false)
        expect(list.swap(1,3)).to.equal(true)
        expect(list.swap(1,3.4)).to.equal(false)
        expect(list.swap(1,-3.4)).to.equal(false)
        expect(list.swap('',2)).to.equal(false)
        expect(list.swap('',900)).to.equal(false)
        expect(list.swap(900,900)).to.equal(false)
        expect(list.swap(900,0)).to.equal(false)
        expect(list.swap(-900,0)).to.equal(false)
        expect(list.swap(0,0)).to.equal(false)
        expect(list.swap(0,2)).to.equal(true)
        expect(list.swap(2,2)).to.equal(false)
        expect(list.swap(-1,-1, 5)).to.equal(false)
        expect(list.swap(0,1, 5)).to.equal(true)
        expect(list.swap(0.222,1, 5)).to.equal(false)
        expect(list.swap(2,1, 5)).to.equal(true)
        expect(list.swap(2.1, 0)).to.equal(false)
        expect(list.swap(2, 0.3)).to.equal(false)
        expect(list.swap(1, -30)).to.equal(false)
        expect(list.swap(0, 54)).to.equal(false)
        expect(list.swap(4, 4)).to.equal(false)
        expect(list.swap(4-1, 0)).to.equal(true)
        expect(list.swap(4, 'vat')).to.equal(false)
        expect(list.swap(-543, -543)).to.equal(false)
        expect(list.swap('2', 5.43)).to.equal(false)

    });
    it('should not shift elements', function () {
        list.add(1);
        list.shiftLeft();
        expect(list.toString()).to.equal('1')
    });
    it('should not shift elements', function () {
        list.add(1);
        list.add(3);
        list.add(5);
        list.swap(0,1)
        list.swap(1,2)
        list.swap(0,0)
        list.swap(0,2)
        expect(list.toString()).to.equal('1, 5, 3')
    });
    it('should not shift elements', function () {
        list.shiftRight();
        expect(list.toString()).to.equal('')
    });
    it('should not shift elements', function () {

        list.add()
        list.add()
        list.add()
        list.add()
        list.shiftLeft()
        list.swap(2, 3)
        expect(list.toString()).to.equal(', , , ')
    });
    it('should ', function () {
        list.add(1);
        list.add(3);
        list.add(5);
        list.swap(0,2)
        expect(list.toString()).to.equal('5, 3, 1')
    })
    it('should ', function () {
        list.add(1);
        list.add(3);
        list.add(5);
        expect(list.swap(-1)).to.equal(false)
    });
    it('should ', function () {
        list.add(1);
        list.add('cat');
        list.add(5);
        expect(list.swap(0,'at')).to.equal(false)
    })
    it('should return empty string', function () {
        list.add('');
        expect(list.toString()).to.equal('')
    });
});