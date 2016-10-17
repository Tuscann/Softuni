function t(input) {

    let number=Number(input[0]) ;

    if (number >= 0 && number <= 19)
    {
        if (number == 0) { console.log("zero"); }
        else if (number == 1) { console.log("one"); }
        else if (number == 2) { console.log("two"); }
        else if (number == 3) { console.log("three"); }
        else if (number == 4) { console.log("four"); }
        else if (number == 5) { console.log("five"); }
        else if (number == 6) { console.log("six"); }
        else if (number == 7) { console.log("seven"); }
        else if (number == 8) { console.log("eight"); }
        else if (number == 9) { console.log("nine"); }
        else if (number == 10) { console.log("ten"); }
        else if (number == 11) { console.log("eleven"); }
        else if (number == 12) { console.log("twelve"); }
        else if (number == 13) { console.log("thirteen"); }
        else if (number == 14) { console.log("fourteen"); }
        else if (number == 15) { console.log("fifteen"); }
        else if (number == 16) { console.log("sixteen"); }
        else if (number == 17) { console.log("seventeen"); }
        else if (number == 18) { console.log("eightteen"); }
        else if (number == 19) { console.log("nineteen"); }
    }
    else if (number >= 20 && number <= 99)
    {
        if(number==30){console.log('thirty')}
        else if(number==20){console.log('twenty')}
        else if(number==40){console.log('fourty')}
        else if(number==50){console.log('fifty')}
        else if(number==60){console.log('sixty')}
        else if(number==70){console.log('seventy')}
        else if(number==80){console.log('eighty')}
        else if(number==90){console.log('ninety')}

        // string[] zeroNine = new string[10] { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
        // string[] lastZero = new string[10] { "zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety" };

        // if (number % 10 == 0) { console.log(lastZero[number / 10]); }
        // else { console.log(lastZero[number / 10] + " " + zeroNine[number % 10]);}

    }
    else if (number == 100) { console.log("one hundred"); }
    else { console.log("invalid number");}
}
t([34]);
t([4]);
