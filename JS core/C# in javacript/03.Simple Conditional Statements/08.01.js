function converter(input) {

    let n = Number(input[0]);
    let first = String(input[1]);
    let last = String(input[2]);

    if (first == 'km') {
        if (last == 'ft') {
            console.log(n * 1000 * 3.2808399 + " " + last);
        }
        else if (last == 'mm') {
            console.log(n * 1000 * 1000 + " " + last);
        }
        else if (last == 'cm') {
            console.log(n * 1000 * 100 + " " + last);
        }
        else if (last == 'mi') {
            console.log(n * 1000 * 0.000621371192 + " " + last);
        }
        else if (last == 'in') {
            console.log(n * 1000 * 39.3700787 + " " + last);
        }
        else if (last == 'ýd') {
            console.log(n * 1000 * 1.0936133 + " " + last);
        }
        else if(last=='m'){
            console.log(n * 1000 * 0.001 + " " + last);
        }
    }
    else if(first=='m') {
        if (last == 'ft') {
            console.log(n * 3.2808399 + " " + last);
        }
        else if (last == 'mm') {
            console.log(n * 1000 + " " + last);
        }
        else if (last == 'cm') {
            console.log(n  * 100 + " " + last);
        }
        else if (last == 'mi') {
            console.log(n * 0.000621371192 + " " + last);
        }
        else if (last == 'in') {
            console.log(n * 1000 * 39.3700787 + " " + last);
        }
        else if (last == 'ýd') {
            console.log(n * 1.0936133 + " " + last);
        }
        else if(last=='km'){
            console.log(n * 1000  + " " + last);
        }
    }

}
converter(['12', 'km', 'ft']);
converter(['10', 'm', 'km']);
converter(['15.75', 'm', 'cm']);
converter(['150', 'mi', 'in']);
converter(['450', 'yd', 'km']);