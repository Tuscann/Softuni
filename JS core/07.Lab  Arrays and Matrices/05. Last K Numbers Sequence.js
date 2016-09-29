function a(input) {

    let sequnce = [1];
    let n = Number(input[0]);
    let k = Number(input[1]);

    for (let current = 0; current < n; current++) {

        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum=0;
        // for ( let i = start; i <end ; i++)
        // {
        //   sum+=current;
        // }

            // = start + end;
        sequnce[current] = sum;


    }
    console.log(sequnce);

}
a(['6', '3']);
a(['8', '2']);