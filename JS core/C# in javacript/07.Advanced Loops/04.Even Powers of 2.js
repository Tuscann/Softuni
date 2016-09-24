function as (input) {
    console.log(1);

    for ( i = 2; i <= Number(input[0]); i+=2)
    {
        console.log(Math.pow(2,i));
    }


}
as(['7']);