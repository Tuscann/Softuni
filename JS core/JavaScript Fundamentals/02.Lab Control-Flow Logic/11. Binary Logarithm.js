function binary(input) {
    let nums = input.map(Number);

    for (let num of nums) {
        console.log(Math.log2(num));
    }
}
binary(["2", 81, '4', "1024"])
