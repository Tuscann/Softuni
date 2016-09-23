function interest(input) {

    let p = Number(input[0]);
    let i = Number(input[1]) / 100;    /* правя проценти */
    let n = 12 / Number(input[2]);    /* показва колко пъти се повтаря олихвяването в една година    */
    let t = Number(input[3]);

    let F = p * (Math.pow(1 + (i / n), ( n * t)));
    console.log(F.toFixed(2));
}
interest([1500, 4.3, 3, 6]);
interest([100000, 5, 12, 25]);