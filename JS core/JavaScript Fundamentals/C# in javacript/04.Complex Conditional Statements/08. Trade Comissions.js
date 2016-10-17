function tradess(input) {
    let city = String(input[0]);
    let money = Number(input[1]);

    if (city == 'Sofia') {
        if (money >= 0 && money <= 500) {
            console.log((0.05 * money).toFixed(2));
        }
        else if (money > 500 && money <= 1000) {
            console.log((0.07 * money).toFixed(2));
        }
        else if (money > 1000 && money <= 10000) {
            console.log((0.08 * money).toFixed(2));
        }
        else if (money > 10000) {
            console.log((0.12 * money).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else if (city == 'Varna') {
        if (money >= 0 && money <= 500) {
            console.log((0.045 * money).toFixed(2));
        }
        else if (money > 500 && money <= 1000) {
            console.log((0.075 * money).toFixed(2));
        }
        else if (money > 1000 && money <= 10000) {
            console.log((0.1 * money).toFixed(2));
        }
        else if (money > 10000) {
            console.log((0.13 * money).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else if (city == 'Plovdiv') {
        if (money >= 0 && money <= 500) {
            console.log((0.055 * money).toFixed(2));
        }
        else if (money > 500 && money <= 1000) {
            console.log((0.08 * money).toFixed(2));
        }
        else if (money > 1000 && money <= 10000) {
            console.log((0.12 * money).toFixed(2));
        }
        else if (money > 10000) {
            console.log((0.145 * money).toFixed(2));
        }
        else {
            console.log('error');
        }
    }
    else {
        console.log('error');
    }
}
tradess(['Sofia', '1500']);
tradess(['Plovdiv', '499.99']);
tradess(['Varna', '3874.5']);
tradess(['Kaspichan', '-50']);