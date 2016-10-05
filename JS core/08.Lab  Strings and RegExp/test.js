function validateLink(array){
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let result = [];
    for(let sentence of array){
        let match = sentence.match(regex);
        if(match != null) {
            for (let occurrance of match) {
                result.push(occurrance);
            }
        }
    }
    console.log(result.join('\n'));
}