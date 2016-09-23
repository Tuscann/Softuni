function stars(input) {
    let n = Number(input[0]);

    console.log("*".repeat(n));
    for (i = 0; i < n - 2; i++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }
    console.log("*".repeat(n));
}
stars(["12"])