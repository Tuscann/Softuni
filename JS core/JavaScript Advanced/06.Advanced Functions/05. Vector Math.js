(function () {
    return {
        add: (arr1, arr2) => {
            let arr = [];
            arr[0] = Number(arr1[0]) + Number(arr2[0]);
            arr[1] = Number(arr1[1]) + Number(arr2[1]);
            return arr
        },
        multiply: (arr1, stepen)=> {
            let arr = [];
            arr[0] = Number(arr1[0]) * Number(stepen);
            arr[1] = Number(arr1[1]) * Number(stepen);
            return arr;
        },
        length: (arr1) => {
            let arr = Math.sqrt(Math.pow(arr1[0], 2) + Math.pow(arr1[1], 2));
            return arr;
        },
        dot: (arr1, arr2) => {
            let arr = arr1[0] * arr2[0] + arr1[1] * arr2[1];
            return arr;
        },
        cross: (arr1, arr2)=> {
            let arr = arr1[0] * arr2[1] - arr1[1] * arr2[0];
            return arr;
        }
    };
})();