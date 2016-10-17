function solve([input]) {

    var myMap = new Map();
    var keyString = "a string",
        keyObj = {},
        keyFunc = function () {
        };

    // myMap.set(keyString, "value associated with 'a string'");
    // myMap.set(keyObj, "value associated with keyObj");
    // myMap.set(keyFunc, "value associated with keyFunc");
    // myMap.set('key', 'value');

    // console.log(myMap);
    // console.log(myMap.get(keyString));
    // for (var [key,value] of myMap.entries()){
    //     console.log(key+ ' = '+value);
    // }
    myMap.forEach(function (value,key) {
        console.log(key + ' = ' + value);
    }, myMap)


}
// solve(['1', '1.53', '06/06/2016', '8']);

solve(['2', '4.99', '06/07/2016', '3', '0.35', '03/01/2013', '5']);