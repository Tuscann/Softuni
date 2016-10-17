function even(input) {

    if (Number(input[0]) % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
even(['2']);
even([3]);
even([25]);
even([1024]);