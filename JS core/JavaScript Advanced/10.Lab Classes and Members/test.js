let obj = {w: 23, h: 45};
let d1 = new Date(2016, 2, 3);

// vdigame nivoto na abstrakziq

// console.log(d1);
// console.log(obj);

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
let redrect = new Rectangle(4, 5, 'red');
// console.log(redrect.width);
let red=new Rectangle(undefined,5,undefined);
// console.log(red);

let total=[redrect,red];
console.log(total);