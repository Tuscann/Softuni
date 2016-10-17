function mult(nums) {
    let x = Number(nums[0]);
    let y = Number(nums[1]);
    let xMin = Number(nums[2]);
    let xMax = Number(nums[3]);
    let yMin = Number(nums[4]);
    let yMax = Number(nums[5]);

    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
        console.log("inside");
    }
    else {
        console.log("outside");
    }
}
mult(['8', '-1', '2', '12', '-3', '3']);
mult(['12.5', '-1', '2', '12', '-3', '3']);
mult(['12', '-3', '2', '12', '3', '1']);
mult(['12', '-4', '2', '12', '-3', '3']);

