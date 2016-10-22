function result() {
    let summary = [];
    let sortedTypes = [];

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        if (!summary[type]) {
            summary[type] = 1;
        }
        else {
            summary[type]++;
        }
    }
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    for (let i = 0; i < sortedTypes.length; i++) {
        let curent = sortedTypes[i];
        console.log(curent[0] + " = " + curent[1]);
    }
}
//result('cat', 42, function () {console.log('Hello world!');});
result({name: 'bob'},3.333,9.999);