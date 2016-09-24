function shop(input) {
    let x = String(input[0]);

    var fruit = {banana: 'banana', apple: 'apple', kiwi: '2', cherry: '3', lemon: '4', grapes: '5'};
    var vegetable = {tomato: '0', cucumber: '1', pepper: '2', carrot: '3'};

    if (fruit.hasOwnProperty(x) == true) {
        console.log('fruit');
    }
    else if(vegetable.hasOwnProperty(x) == true) {
        console.log('vegetable');
    }
    else{
        console.log('unknown');
    }
}
shop(['banana']);
shop(['kiwi']);
shop(['tomato']);
shop(['tomataaa']);
