function solve([resource]) {
    const DAILY_USED = 26;
    const AMORTIZATION = 10;
    const MIN_RESOURCE = 100;

    resource = Number(resource);

    let days = 0;
    let spice = 0;

    while (resource >= MIN_RESOURCE) {
        days  += 1;
        spice += resource - DAILY_USED;
        resource -= AMORTIZATION;
    }

    spice -= DAILY_USED;

    console.log(days);
    console.log(spice);
}

solve(['111']);
solve(['450']);
solve(['200']);