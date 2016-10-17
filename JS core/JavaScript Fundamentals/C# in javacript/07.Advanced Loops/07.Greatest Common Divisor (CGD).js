function eklivd(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    while (b != 0)
    {
        let oldb = b;
        b = a % b;
        a = oldb;
    }
    console.log(Math.max(a,b));

}
eklivd(['67', '18']);
eklivd(['100', '88']);