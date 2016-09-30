function as(input) {
    // let arr = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (i % 2 == 0){
    //         arr.push(input[i]);
    //     }
    // }
    // console.log(arr.join(' '));



    // console.log(input.filter((x, i) => i%2==0).join(' '));


    let string = '';
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            string += input[i] + ' ';
        }
    }
    console.log(string);
}
as(['20', '30', '40']);
// as(['5', '10']);