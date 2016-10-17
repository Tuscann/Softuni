function sum(input) {
    let n = Number(input[0]);
    result = '';


    for (let i = 1; i <= n; i++)
        if (isSymmetric("" + i))
            result += i + " ";

    console.log(result);


    function isSymmetric(str) {
        for (let a = 0; a < str.length / 2; a++)
            if (str[a] != str[str.length - a - 1])
                return false;
        return true;
    }

}
sum(['5']);