function interest(input) {

    let principal = Number(input[0]);
    let interest = Number(input[1]) / 100;    /* правя проценти */
    let period = 12 / Number(input[2]);    /* показва колко пъти се повтаря олихвяването в една година    */
    let time = Number(input[3]);

    let total = principal * (Math.pow(1 + (interest / period), ( period * time)));
    console.log(total.toFixed(2));
}
interest([1500, 4.3, 3, 6]);
interest([100000, 5, 12, 25]);