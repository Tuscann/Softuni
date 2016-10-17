function a(input) {
    let lenght = Number(input[0]);
    let nums = Number(input[1]);

    let sequnce = [1];
    let result = 0;

    for (let current = 1; current < nums; current++) {

        let start = Math.max(0, current - nums);
        let tempArray = sequnce.slice(start, start + lenght);
        result = tempArray.reduce((a, b)=>a + b);


        // console.log(result);

        // for ( let i = start; i <end ; i++)
        // {
        //   sum+=current;
        // }

        // = start + end;
        // sequnce[current] = sum;


    }
    console.log(result);

}
a(['6', '3']);
// a(['8', '2']);
a([6, 3]);