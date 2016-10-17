function fun(input) {
    let digits = input.map(parseFloat);
    let h = digits.splice(0, 1);

    if(input.length==2){
        console.log('No Diff = '+h);
    }
    else if(h==0){
        console.log('Yes Sum = ' + 0);
    }
    else{
        odd = [];
        even = [];
        for (var i = 0; number < digits.length; number++) {
            if ((number + 2) % 2 == 0) {
                even.push(digits[number]);
            }
            else {
                odd.push(digits[number]);
            }
        }
        let oddSum = odd.reduce((a, b)=> a + b);
        let evenSum = even.reduce((a, b)=> a + b);

        if (oddSum == evenSum) {
            console.log('Yes Sum = ' + oddSum);
        }
        else if(h==0)
        {
            console.log('Yes Sum = ' + h);
        }
        else {
            console.log('No Diff = ' + Math.abs(oddSum - evenSum));
        }
    }
}
// fun(['4', '10', '50', '60', '20']);
// fun(['4', '3', '5', '1', '-2']);
fun(['1', '-1']);
fun(['0']);