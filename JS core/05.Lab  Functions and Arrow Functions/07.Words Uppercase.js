function das(input) {
    let UpperString = String(input).toUpperCase();
    console.log(UpperString);

    var outString = UpperString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    var x=outString.split(' ');

    let total='';

    for ( i = 0; i < x.length; i++)
    {
      total+=x[i]+", "
    }
    total=total.substring(0,)



    // let final=outString.join(', ');
     console.log( total);
    // console.log(final);
    // console.log(JSON.parse(outString));

}
das(['Hi, how are you?']);