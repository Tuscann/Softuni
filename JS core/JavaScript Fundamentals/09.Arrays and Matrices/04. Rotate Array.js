function rotateArray(input) {

    let rotation = Number(input[input.length - 1]);  // последен член 2
    let print = input.slice(0, input.length - 1);   // всичко без две

    for (let i = 0; i < rotation % print.length; i++) {
        //rotation % print.length  - колко ротации да направи   15%4 -> 15-(3*4)=3
        let last = print.pop();
        print.unshift(last);
    }
    console.log(print.join(' '));
}
rotateArray([1, 2, 3, 4, 15]);