function task4(input) {


    let arrays = new Map;
    for (let i = 0; i < input.length/2; i++) {
        var currenet = input[i];
        if(!arrays.has(currenet)){
            arrays.set(currenet,input.length)
        }
        console.log(arrays);
    }


    // var A = 0;
    // var B = 0;
    // var C = 0;
    // var D = 0;
    //
    // let charA = 'A';
    // let charB = 'B';
    // let charC = 'C';
    // let charD = 'D';
    // let charE = 'E';
    //
    // for (var i = 0; i < input.length / 2; i++) {
    //     if (input[i] == charA) {
    //         A++;
    //     }
    //     if (input[i] == charB) {
    //         B++;
    //     }
    //     if (input[i] == charC) {
    //         C++;
    //     }
    //     if (input[i] == charD) {
    //         D++;
    //     }
    // }
    //
    // for (let j = input.length / 2; j < input.length - 1; j++) {
    //     let x = input[j].split('-');
    //
    //     if (x[0] == charA || x[1] == charA) {
    //         A++;
    //     }
    //     if (x[0] == charB || x[1] == charB) {
    //         B++;
    //     }
    //     if (x[0] == charC || x[1] == charC) {
    //         C++;
    //     }
    //
    //     if (x[0] == charD || x[1] == charD) {
    //         D++;
    //     }
    // }
    //
    //
    //
    // console.log(Math.max(A,B,C,D));
    // console.log(B);
    // console.log(C);
    // console.log(D);
    //


    // function foo(input) {
    //     var a = [], b = [], prev;
    //
    //     arr.sort();
    //     for ( var i = 0; i < arr.length; i++ ) {
    //         if ( arr[i] !== prev ) {
    //             a.push(arr[i]);
    //             b.push(1);
    //         } else {
    //             b[b.length-1]++;
    //         }
    //         prev = arr[i];
    //     }
    //
    //     return [a, b];
    // }
    //
    // var result = foo(input);


}
//task4(['J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J']);
task4(['A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A']);