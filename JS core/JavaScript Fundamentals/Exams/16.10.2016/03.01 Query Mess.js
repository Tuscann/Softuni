function main(arr){
    let specialKey = arr.shift();
    let pattern = new RegExp(`(^|\\s{1})${specialKey}`, 'gi');
    for (let row of arr){
        let matches = row.match(pattern);
        row = row.replace(pattern, 'kamenEpich');
        let wordPattern = /(\s*|^)kamenEpich\s+([A-Z!%$#]{8,}(?=(\s{1}|\,{1}|\.{1}|$)))/g;
        let wordMatcher = wordPattern.exec(row);
        while (wordMatcher){
            let replacement = wordMatcher[2].toLowerCase().replace(/!/g, '1').replace(/%/g, '2').replace(/#/g, '3').replace(/\$/g, '4');
            row = row.replace(wordMatcher[2], replacement);
            wordMatcher = wordPattern.exec(row);
        }
        let matcher = /kamenEpich/g.exec(row);
        let index = 0;
        while(matcher){
            row = row.replace(matcher[0],matches[index])
            matcher = /kamenEpich/g.exec(row)
            index++;
        }
        console.log(row)
    }
}
main([ 'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ])