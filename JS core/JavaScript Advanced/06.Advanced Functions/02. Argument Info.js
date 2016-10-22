function result() {

    let firstArgument = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];

        console.log(obj + ":" + typeof obj);

        if(!summary[typeof obj]){
            summary[type]=1;
        }

    }

}
console.log(result('cat', 42, function () {
    console.log('Hello world!');
}));