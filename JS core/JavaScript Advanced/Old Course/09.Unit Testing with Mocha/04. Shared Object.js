describe("Test sharedObject", function () {
    beforeEach("clear fields", function () {
        $('#name').val('');
        $('#income').val('');
    });
    afterEach("clear fields", function () {
        $('#name').val('');
        $('#income').val('');
    });
    describe("Test if all requred properties exist", function () {
        it("should have property name", function () {
            expect(sharedObject.hasOwnProperty('name')).to.be.equal(true);
        });
        it("should have property income", function () {
            expect(sharedObject.hasOwnProperty('income')).to.be.equal(true);
        });
        it("should have property changeName", function () {
            expect(sharedObject.hasOwnProperty('changeName')).to.be.equal(true);
        });
        it("should have property changeIncome", function () {
            expect(sharedObject.hasOwnProperty('changeIncome')).to.be.equal(true);
        });
        it("should have property updateName", function () {
            expect(sharedObject.hasOwnProperty('updateName')).to.be.equal(true);
        });
        it("should have property updateIncome", function () {
            expect(sharedObject.hasOwnProperty('updateIncome')).to.be.equal(true);
        });
    });
    describe("Test initial state", function () {
        it("should equal null for sharedObject.name", function () {
            expect(sharedObject.name).to.be.equal(null);
        });
        it("should equal null for sharedObject.income", function () {
            expect(sharedObject.income).to.be.equal(null);
        });
        it("property changeName should be function", function () {
            expect(typeof sharedObject.changeName).to.be.equal('function');
        });
        it("property changeIncome should be function", function () {
            expect(typeof sharedObject.changeIncome).to.be.equal('function');
        });
        it("property updateName should be function", function () {
            expect(typeof sharedObject.updateName).to.be.equal('function');
        });
        it("property updateIncome should be function", function () {
            expect(typeof sharedObject.updateIncome).to.be.equal('function');
        });
    });
    describe("Test nominal cases", function () {
        it("should make no changes for sharedObject.changeName('')", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).equal(null);
        });
        it("should make no changes for sharedObject.changeIncome('buta')", function () {
            sharedObject.changeIncome('');
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.changeIncome(0)", function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.changeIncome(4.2)", function () {
            sharedObject.changeIncome(4.2);
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.changeIncome(-5)", function () {
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.updateName() when name field is empty", function () {
            sharedObject.updateName();
            expect(sharedObject.name).equal(null);
        });
        it("should make no changes for sharedObject.updateIncome() when income field is empty", function () {
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.updateIncome() when income field is '-54'", function () {
            $('#income').val('-54');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.updateIncome() when income field is '0'", function () {
            $('#income').val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(null);
        });
        it("should make no changes for sharedObject.updateIncome() when income field is '4.2'", function () {
            $('#income').val('4.2');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(null);
        });
    });
    describe("Test normal cases", function () {
        it("name property should equal 'testname' for sharedObject.changeName('testname')", function () {
            sharedObject.changeName('testname');
            expect(sharedObject.name).equal('testname');
        });
        it("name field should equal 'testname' for sharedObject.changeName('testname')", function () {
            sharedObject.changeName('testname');
            let nameFieldVal = $('#name').val();
            expect(nameFieldVal).equal('testname');
        });

        it("income property should equal 100 for sharedObject.changeIncome(100)", function () {
            sharedObject.changeIncome(100);
            expect(sharedObject.income).equal(100);
        });
        it("income field should equal '100' for sharedObject.changeIncome(100)", function () {
            sharedObject.changeIncome(100);
            let incomeFieldVal = Number($('#income').val());
            expect(incomeFieldVal).equal(100);
        });

        it("name property should equal 'testname' for sharedObject.updateName() when name field is 'testname'", function () {
            $('#name').val('testname');
            sharedObject.updateName();
            expect(sharedObject.name).equal('testname');
        });
        it("income property should equal 544 for sharedObject.updateIncome() when income field is '544'", function () {
            $('#income').val('544');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(544);
        });
    });
});