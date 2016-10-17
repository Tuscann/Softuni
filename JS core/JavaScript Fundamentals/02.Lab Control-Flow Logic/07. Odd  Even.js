/**
 * Created by 123 on 20.9.2016 г..
 */
function number(input) {
    let num = Math.abs(Number(input[0])); //вземам абсолутна стоиност за премахна минуса на числото

    if (num % 2 == 0) {
        console.log('even')
    }
    else if (num % 2 == 1){
        console.log('odd')
    }
    else{
        console.log('invalid')
    }

}
number(['5']);
number(['8']);
number(['1.5']);
number([-3]);