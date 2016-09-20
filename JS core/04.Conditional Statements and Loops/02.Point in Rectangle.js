function mult(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);
    let num4 = Number(nums[3]);
    let num5 = Number(nums[4]);
    let num6 = Number(nums[5]);
    let result = Math.max(num1, num2, num3, num4, num5, num6);

    if (num1 == result) {
        console.log("outside");
    }
    else if(num2 == result){
        console.log("outside");
    }
    // else if(num1 == result||){
    //
    // }
    else {
        console.log("inside");
    }
}
mult(['12.5', '-1', '2', '12', '-3', '3']);

