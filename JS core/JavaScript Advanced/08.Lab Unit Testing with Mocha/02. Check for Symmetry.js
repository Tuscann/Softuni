describe("isSymmetric(arr) ", function() {
    it("should return true for [1,2,3,3,2,1]", function() {
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [1,2,3,4,2,1]", function() {
        let symmetric = isSymmetric([1,2,3,4,2,1]);
        expect(symmetric).to.be.equal(false);
    });
    it("should return true for [-1,2,-1]", function() {
        let symmetric = isSymmetric([-1,2,-1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function() {
        let symmetric = isSymmetric([-1,2,1]);
        expect(symmetric).to.be.equal(false);
    });
    it("should return false for [1,2]", function() {
        let symmetric = isSymmetric([1,2]);
        expect(symmetric).to.be.equal(false);
    });
    it("should return true for [1]", function() {
        let symmetric = isSymmetric([1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
        let symmetric = isSymmetric([[5,'hi',{a:5},new Date(),{a:5},'hi',5]]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function() {
        let symmetric = isSymmetric([[5,'hi',{a:5},new Date(),{X:5},'hi',5]]);
        expect(symmetric).to.be.equal(false);
    });
    it("should return false for 1,2,2,1", function() {
        let symmetric = isSymmetric(1,2,2,1);
        expect(symmetric).to.be.equal(false);
    });
    it("should return false for empty array", function() {
        let symmetric = isSymmetric([]);
        expect(symmetric).to.be.equal(false);
    });
});