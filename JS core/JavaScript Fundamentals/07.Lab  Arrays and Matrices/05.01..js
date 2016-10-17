function lastKNumbersSequence([num, len]){
    [len, num].map(Number);
    let arr = [1];

    let calNum = function(arr, index, len){
        let start = (index <= len)? 0: index-len;
        let tempArray = arr.slice(start, start+len);
        let result = tempArray.reduce((a, b) => a+b);
        return result;
    };

    for (let i = 1; i < num; i++){
        arr[i] = calNum(arr, i, len);
    }
    console.log(arr.join(' '));

    // for (let n of arr){
    //     console.log(n);
    // }
}
lastKNumbersSequence([6, 3]);
