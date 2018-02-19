function calcAggregates(arr) {
    console.log("Sum = " + reduce(arr, (a, b) => Number(a) + Number(b)));
    console.log("Min = " + Math.min.apply(null, arr));
    console.log("Max = " + Math.max.apply(null, arr));
    console.log('Product = '+reduce(arr, (a, b) => Number(a)* Number(b)));
    console.log("Join = " + reduce(arr, (a, b) => '' + a + b));


    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }
}
calcAggregates([2, 3, 10, 5]);
calcAggregates([5, -3, 20, 7, 0.5]);

