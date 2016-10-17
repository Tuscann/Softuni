function az(input) {

    function* entries(obj) {
        for (let key in obj)
            yield [key, obj[key]];
    }

    const map = new Map(entries({foo: 'bar',a1:'dasdas'}));


    console.log(map);
}
az(['10', '200', '30']);