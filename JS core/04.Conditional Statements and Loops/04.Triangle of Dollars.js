function mult(nums) {

    for (row = 1; row <= Number(nums); row++) {
        console.log(new Array(row + 1).join('$'));
    }
}
mult(['4']);

