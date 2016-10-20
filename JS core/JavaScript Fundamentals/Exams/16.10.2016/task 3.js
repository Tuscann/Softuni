function task3(input) {

    let specialKeyss = input[0];
    let pattern = new RegExp(specialKeyss + '(\s{1,})[A-Z!%$#]{7,}( |\.\,)', 'gi');

    let match;

    for (let i = 1; i < input.length; i++) {
        let encodingMesage = input[i];
        let dam = '(\s+)[A-Z!%$#]{7,}( |\.,)';

        let specialKeyCheck = new RegExp(specialKeyss, 'gi');
        let encodedMessageCheck = new RegExp(dam, 'g');


        let count = specialKeyCheck.exec(encodingMesage);

        let dads = encodedMessageCheck.exec(encodingMesage);
        console.log(dads);



        // if (count.index + specialKeyss.length == dads.index)
        // console.log( count.index + specialKeyss.length);
        //console.log(dads.index);

        // console.log(count.index + specialKeyss.length);



        // let match = regggg.exec(encodingMesage);
        // console.log(match);
    }
    // console.log(specialKey);


}
task3(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);
//task3(["enCode", "Some messages are just not encoded what can you do?", "RE - ENCODE THEMNOW! - he said.", "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]);