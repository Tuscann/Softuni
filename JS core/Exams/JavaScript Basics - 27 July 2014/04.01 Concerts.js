function solve(arr) {
    var output = {};
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i];
        var data = line.split(/[| ]+ /g);
        var city = data[1].toString();
        var place = data[3].toString();
        var band = data[0].toString();

        if (!output[city]) {
            output[city] = {};
        }

        if (!output[city][place]) {
            output[city][place] = [];
        }

        if (output[city][place].indexOf(band) === -1) {
            output[city][place].push(band);
        }
    }

    output = sortObj(output);
    //console.log(output);
    //console.log(Object.keys(output).sort());
    for (var city in output) {
        //console.log(city);
        output[city] = sortObj(output[city]);
        //console.log(Object.keys(output[city]).sort());
        for (var place in output[city]) {
            //console.log(Object.keys(output[city][place]).sort());
            output[city][place] = output[city][place].sort();
        }
    }


    console.log(JSON.stringify(output));
    //console.log(output);

    //http://www.latentmotion.com/how-to-sort-an-associative-array-object-in-javascript/
    function sortObj(arr) {
        // Setup Arrays
        var sortedKeys = new Array();
        var sortedObj = {};

        // Separate keys and sort them
        for (var i in arr) {
            sortedKeys.push(i);

        }
        sortedKeys.sort();

        // Reconstruct sorted obj based on keys
        for (var i in sortedKeys) {
            sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];

        }
        return sortedObj;

    }
}

//solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
//'Iron Maiden | London | 28 - Jul - 2014 | Wembley Stadium',
//'Metallica | Sofia | 11 - Aug - 2014 | Lokomotiv Stadium',
//'Helloween | Sofia | 1 - Nov - 2014 | Vassil Levski Stadium',
//'Iron Maiden | Sofia | 20 - June - 2015 | Vassil Levski Stadium',
//'Helloween | Sofia | 30 - July - 2015 | Vassil Levski Stadium',
//'Iron Maiden | Sofia | 26 - Sep - 2014 | Lokomotiv Stadium',
//'Helloween | London | 28 - Jul - 2014 | Wembley Stadium',
//'Twisted Sister | London | 30 - Sep - 2014 | Wembley Stadium',
//'Metallica | London | 03 - Oct - 2014 | Olympic Stadium',
//'Iron Maiden | Sofia | 11 - Apr - 2016 | Lokomotiv Stadium',
//'Iron Maiden | Buenos Aires | 03 - Mar - 2014 | River Plate Stadium']);