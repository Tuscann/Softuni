function MultiplyTwoNumbers(input) {

    let first = Number(input[0]);
    let secound = Number(input[1]);

    if (first > secound) {
        console.log(first / secound);
    }
    else if (first <= secound) {
        console.log(secound * first);
    }
}
MultiplyTwoNumbers(['2', '3']);
MultiplyTwoNumbers(['13', '13']);
MultiplyTwoNumbers(['1', '2']);
MultiplyTwoNumbers(['0', '50']);
MultiplyTwoNumbers(['3', '2']);
MultiplyTwoNumbers(['144', '12']);
MultiplyTwoNumbers(['1', '0']);
MultiplyTwoNumbers(['0', '0']);
MultiplyTwoNumbers(['0', '1']);