let createList = require("../02-addSwapShiftLeftRightInList");
let expect = require("chai").expect;

describe(`List tests`, function() {
    "use strict";
    let list;
    beforeEach(function() {
        list = createList();
    });

    describe(`List add`, function() {
        "use strict";

        it(`should return "1, str, " for add(1), add('str'), add()`, function() {
            list.add(1);
            list.add('str');
            list.add(``);

            expect(list.toString()).to.equal(`1, str, `);
        });

        it(``, function() {
            list.add({
                name: `name`,
                value: `value`
            });

            expect(list.toString()).to.equal(`[object Object]`);
        });

        it(``, function() {
            list.add(null);

            expect(list.toString()).to.equal(``);
        });

        it(``, function() {
            list.add();
            list.add();

            expect(list.toString()).to.equal(`, `);
        });

    });

    describe(`List shiftLeft`, function() {
        "use strict";

        it(`should return "2, 3, 1"`, function() {
            list.shiftLeft();
            expect(list.toString()).to.equal(``);
        });

        it(`should return "2, 3, 1"`, function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.shiftLeft();

            expect(list.toString()).to.equal(`2, 3, 1`);
        });

        it(`should return "2, 3, 1"`, function() {
            list.add(1);
            list.add(`2`);
            list.add(3);
            list.shiftLeft();

            expect(list.toString()).to.equal(`2, 3, 1`);
        });

        it(``, function() {
            list.add(1);
            list.shiftLeft();

            expect(list.toString()).to.equal(`1`);
        });

        it(``, function() {
            list.shiftLeft();

            expect(list.toString()).to.equal(``);
        });

    });

    describe(`List shiftRight`, function() {
        "use strict";


        it(`should return "2, 3, 1"`, function() {
            list.shiftRight();
            expect(list.toString()).to.equal(``);
        });


        it(``, function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.shiftRight();

            expect(list.toString()).to.equal(`3, 1, 2`);
        });

        it(``, function() {
            list.add(1);
            list.shiftRight();

            expect(list.toString()).to.equal(`1`);
        });

        it(``, function() {
            list.add(`str`);
            list.shiftRight();

            expect(list.toString()).to.equal(`str`);
        });

        it(``, function() {
            list.shiftRight();

            expect(list.toString()).to.equal(``);
        });

    });

    describe(`List swap`, function() {
        "use strict";

        it(`1`, function() {
            expect(list.swap(1, 2)).to.equal(false);
        });

        it(`1.1`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap()).to.equal(false);
        });

        it(`2`, function() {
            list.add(1);

            expect(list.swap(1, 2)).to.equal(false);
        });

        it(`3`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(10, 2)).to.equal(false);
        });

        it(`3.03`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 2)).to.equal(false);
        });

        it(`3.04`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(2, 1)).to.equal(false);
        });

        it(`3.05`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(10, 2.5)).to.equal(false);
        });

        it(`3.06`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1.5, `str`)).to.equal(false);
        });

        it(`3.06`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(`str`, 11)).to.equal(false);
        });

        it(`3.06`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(-1, `str`)).to.equal(false);
        });

        it(`3.06`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(`str`, -2)).to.equal(false);
        });

        it(`3.06`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1.5, 11)).to.equal(false);
        });

        it(`3.1`, function() {
            list.add(1);
            list.add({value: `value`});
            list.add('str');
            expect(list.swap(1, 10)).to.equal(false);
        });

        it(`3.2`, function() {
            list.add(1);
            list.add({value: `value`});
            list.add('str');
            expect(list.swap(10, 2)).to.equal(false);
        });

        it(`3.3`, function() {
            list.add(1);
            list.add({value: `value`});
            list.add('str');
            expect(list.swap(10, 12)).to.equal(false);
        });

        it(`3.4`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 1)).to.equal(false);
        });

        it(`3.4`, function() {
            list.add(1);
            list.add(2);
            list.swap(1, 1);
            expect(list.toString()).to.equal(`1, 2`);
        });

        it(`4`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 1.5)).to.equal(false);
        });

        it(`5`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(0.5, 2)).to.equal(false);
        });


        it(`6`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(0.5, 1.3)).to.equal(false);
        });

        it(`7`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, -2)).to.equal(false);
        });


        it(`8`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(-1, 1)).to.equal(false);
        });


        it(`8.1`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap('str', 1)).to.equal(false);
        });


        it(`8.2`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, `str`)).to.equal(false);
        });


        // VALID

        it(`9`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 0)).to.equal(true);
        });

        it(`9.1`, function() {
            list.add(1);
            list.add(2);
            list.swap(1, 0);
            expect(list.toString()).to.equal(`2, 1`);
        });

        it(`10`, function() {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal(`2, 1`);

            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal(`1, 2`);
        });

        it(`10.1`, function() {
            list.add(1);
            list.add(2);
            list.swap(0, 1);
            expect(list.toString()).to.equal(`2, 1`);

            list.swap(0, 1);
            expect(list.toString()).to.equal(`1, 2`);
        });

        it(`11`, function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal(`3, 2, 1, 4`);

            expect(list.swap(3, 0)).to.equal(true);
            expect(list.toString()).to.equal(`4, 2, 1, 3`);
        });

        it(`11`, function() {
            list.add(`str`);
            list.add(`str2`);
            list.add(`str3`);
            list.add(`str4`);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal(`str3, str2, str, str4`);

            expect(list.swap(3, 0)).to.equal(true);
            expect(list.toString()).to.equal(`str4, str2, str, str3`);
        });
    });

    describe(`complex`, function() {
        it(`12`, function() {
            list.add();
            list.add();
            list.add(2);
            list.add(`tri`);
            expect(list.toString()).to.equal(`, , 2, tri`);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal(`2, , , tri`);

            expect(list.swap(3, 0)).to.equal(true);
            expect(list.toString()).to.equal(`tri, , , 2`);

            list.shiftRight();
            expect(list.toString()).to.equal(`2, tri, , `);

            list.shiftRight();
            expect(list.toString()).to.equal(`, 2, tri, `);

            expect(list.swap(1, 3)).to.equal(true);
            expect(list.toString()).to.equal(`, , tri, 2`);

            list.shiftLeft();
            expect((list.toString())).to.equal(`, tri, 2, `);
        });

        it(`12.1`, function() {
            list.add('str1');
            list.add('str2');
            list.shiftRight();
            list.shiftLeft();
            expect(list.toString()).to.equal(`str1, str2`);
        })
    });

    describe(`join`, function() {

        it(`13`, function() {
            list.add(1);
            list.add(`1`);
            list.add(`str`);
            list.add({value: `value`});
            list.add(null);

            expect(`${list}`).to.equal(`1, 1, str, [object Object], `);
        });

    });
});
 
