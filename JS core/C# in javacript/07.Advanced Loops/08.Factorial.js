function ins(input) {

    let n = Number(input[0]);
    var factoriel = 1;
    do
    {
        factoriel = factoriel * n;
        n--;
    } while (n > 1);
    console.log(factoriel);
}
ins([6]);