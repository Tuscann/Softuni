function max(input) {
    let n = Number(input[0]);
    let total = Number(input[1]);
    console.log(total);

    if (n >= 1) {
        for (let i = 1; number <= n; number++) {
            if (total <= Number(input[number])) {
                total = Number(input[number]);
            }
        }
    }
    console.log(total);

}
max(['2', '100', '99']);
// max(['4', '-1000', '-2000','-3000','-4000']);
// max(['2', '-100', '-999']);