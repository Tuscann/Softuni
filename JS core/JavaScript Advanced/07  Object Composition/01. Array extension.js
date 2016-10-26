function solev() {


    Array.prototype.last = function () {
        return this[this.length - 1]
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for ( let i = n; i < this.length; i++)
        {
          result.push(this[i]);
        }
        return result
    };
    var myArr = [1, 2, 3];
    console.log(myArr.skip(5))

}

solev();