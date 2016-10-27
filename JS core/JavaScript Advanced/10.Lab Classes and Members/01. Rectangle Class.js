/**
 * Created by 123 on 27/10/2016.
 */
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea(){
        return this.width*this.height;
    }
}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.calcArea());