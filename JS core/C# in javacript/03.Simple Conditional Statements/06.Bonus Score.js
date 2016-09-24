function bonus(input) {
    let n = Number(input[0]);
    let bonus = 0;
    if (n % 2 == 0) {
        bonus = bonus + 1;
    }
    if (n % 10 == 5) {
        bonus = bonus + 2;
    }
    if (n <= 100) {
        console.log(5 + bonus);
        console.log(n + 5 + bonus)
    }
    else if (n > 100 && n <= 1000) {
        console.log(0.2 * n + bonus);
        console.log(1.2 * n + bonus);
    }
    else if (n > 1000) {
        console.log(0.1 * n + bonus);
        console.log(1.1 * n + bonus);
    }

}
bonus(['20']);
bonus(['175']);
bonus(['2703']);
bonus(['15875']);
bonus(['1120']);