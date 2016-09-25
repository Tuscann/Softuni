function fib(input) {
    if (Number(input[0]) < 2) {
        console.log(1);
    }
    else {
        var i;
        var fib = []; // Initialize array!

        fib[0] = 0;
        fib[1] = 1;
        for (i = 2; i <= Number(input[0])+1; i++) {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        console.log(Math.max.apply(null,fib));


    }
}
fib(['5']);
// fib(['1']);