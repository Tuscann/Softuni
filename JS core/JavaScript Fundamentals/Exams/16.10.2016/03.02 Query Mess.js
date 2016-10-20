function spyMaster(data) {
    let specialKey = data.shift();
    let regex = new RegExp(`( |^)(${specialKey})(\\s+[A-Z!%$#]{8,})( |\\.|,|$)`, 'ig');

    for (let line of data) {
        let res = line.replace(regex, function (match, g1, g2, g3, g4) {
            let encoded = g3;
            if (encoded.match(/\s+[A-Z!%$#]{8,}/)) {
                encoded = encoded
                    .replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/\$/g, '4')
                    .toLowerCase();
            }
            return (g1 + g2 + encoded + g4);
        });

        if (res) {
            console.log(res);
        } else {
            console.log(line);
        }
    }
}
spyMaster(["enCode","Some messages are just not encoded what can you do?","RE - ENCODE THEMNOW! - he said.","Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]);