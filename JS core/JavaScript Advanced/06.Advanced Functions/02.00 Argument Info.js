function myFunction() {

    let summary = new Map();
    for (let i = 0; i < arguments.length; i++){
        let obj = arguments[i];
        let type = typeof obj;

        console.log(type + ': ' + obj);

        if (!summary.has(type)){
            summary.set(type, 1);
        }
        else{
            summary.set(type, summary.get(type) + 1);
        }
    }
    let sortedKeys = [...summary.keys()];
    sortedKeys = sortedKeys.sort((a, b) => {
        return summary.get(b) - summary.get(a);
    });
    for (let key of sortedKeys){
        console.log(`${key} = ${summary.get(key)}`);
    }
}
myFunction('cat', 42, function () { console.log('Hello world!'); });