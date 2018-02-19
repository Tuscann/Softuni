function fibonacci(n) {
    let fib = (() => {
        let f0 = 0, f1 = 1;
        return () => {
            let oldF0 = f0, oldF1 = f1;
            f0 = oldF1;
            f1 = oldF0 + oldF1;
            return oldF1;
        }
    })();

    let fibNumbers = [];
    for (let i = 1; i <= n; i++){
        fibNumbers.push(fib());
    }

    console.log(fibNumbers);
    return fibNumbers;
}

(fibonacci(15));
