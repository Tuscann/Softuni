function extractTheLinks(input) {
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    // \. escape point
    //[A-Za-z0-9\-] всички числа + голeми малки букви + знака тире
    //[a-z]* само малки букви * много
    //? може и да има може и да няма
    //+ когато е вътре означава веднъж или много пъти предния символ
    let links = [];
    let match;
    for (let trys of input) {
        while (match = regex.exec(trys)) {
            links.push(match[0]);
        }
    }
    return links.join('\n');
}

console.log(extractTheLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']));