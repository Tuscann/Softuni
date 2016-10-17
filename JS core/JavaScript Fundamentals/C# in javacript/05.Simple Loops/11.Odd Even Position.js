function pos(input) {
    let digits = input.map(parseFloat);
    let h = digits.splice(0, 1);

    if (input.length == 2) {
        console.log('OddSum=' + digits[0]);
        console.log('OddMin=' + digits[0]);
        console.log('Oddmax=' + digits[0]);
        console.log('EvenSum=0');
        console.log('EvenMin=No');
        console.log('EvenMax=No');
    }
    else if (h == 0) {
        console.log('OddSum=0');
        console.log('OddMin=No');
        console.log('Oddmax=No');
        console.log('EvenSum=0');
        console.log('EvenMin=No');
        console.log('EvenMax=No');
    }
    else {
        odd = [];
        even = [];
        for (var i = 0; number < digits.length; number++) {
            if ((number + 2) % 2 == 0) {
                odd.push(digits[number]);
            }
            else {
                even.push(digits[number]);
            }
        }

        let oddMax = odd[0];
        for (let i = 1; number <= odd.length; number++) {
            if (oddMax <= odd[number]) {
                oddMax = odd[number];
            }
        }
        let evenMax = even[0];
        for (let i = 1; number <= even.length; number++) {
            if (evenMax <= even[number]) {
                evenMax = even[number];
            }
        }
        let oddMin = odd[0];
        for (let i = 1; number <= odd.length; number++) {
            if (oddMin >= odd[number]) {
                oddMin = odd[number];
            }
        }
        let evenMin = even[0];
        for (let i = 1; number <= even.length; number++) {
            if (evenMin >= even[number]) {
                evenMin = even[number];
            }
        }
        let oddSum = odd.reduce((a, b)=> a + b);
        let evenSum = even.reduce((a, b)=> a + b);

        console.log('OddSum=' + oddSum);
        console.log('OddMin=' + oddMin);
        console.log('Oddmax=' + oddMax);
        console.log('EvenSum=' + evenSum);
        console.log('EvenMin=' + evenMin);
        console.log('EvenMax=' + evenMax);
    }
}
// pos(['6', '2', '3', '5', '4', '2', '1']);
pos(['1', '1']);