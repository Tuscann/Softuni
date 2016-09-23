function converter(input1) {

    let number = Number(input1[0]);
    let input = String(input1[1]);
    let output = String(input1[2]);

    let mm = 1000.0;
    let cm = 100.0;
    let mi = 0.000621371192;
    let inn = 39.3700787;
    let km = 0.001;
    let ft = 3.2808399;
    let yd = 1.0936133;
    let m = 1.0;

    if (input == "mm") { number = number / mm; }
    else if (input == "cm") { number = number / cm; }
    else if (input == "mi") { number = number / mi; }
    else if (input == "in") { number = number / inn; }
    else if (input == "km") { number = number / km; }
    else if (input == "ft") { number = number / ft; }
    else if (input == "yd") { number = number / yd; }
    else if (input == "m") { number = number / m; }
    else { console.log("Wrong Input"); }

    if (output == "mm") { number = number * mm; }
    else if (output == "cm") { number = number * cm; }
    else if (output == "mi") { number = number * mi; }
    else if (output == "in") { number = number * inn; }
    else if (output == "km") { number = number * km; }
    else if (output == "ft") { number = number * ft; }
    else if (output == "yd") { number = number * yd; }
    else if (output == "m") { number = number * m; }
    else { console.log("Wrong Input"); }

    console.log(number+" "+output);
}
converter(['12', 'km', 'ft']);
converter(['15.75', 'm', 'cm']);
converter(['150', 'mi', 'in']);
converter(['450', 'yd', 'km']);