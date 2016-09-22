function units(input) {
    let unit = Number(input);

    let foot = Math.floor(unit / 12);
    let inches = unit % 12;

    // console.log(foot + '\'' +'-'+ inches + "\"")
    console.log(`${foot}'-${inches}"`);
}

units([36]);
units([55]);
units([11]);