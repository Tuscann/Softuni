function stars(input) {
    let n = Number(input[0]);

    console.log("*".repeat(n));
    for (number = 0; number < n - 2; number++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }
    console.log("*".repeat(n));
}
stars(["12"])