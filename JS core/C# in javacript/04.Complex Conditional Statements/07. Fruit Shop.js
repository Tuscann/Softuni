function shop(input) {
    let fruit = String(input[0]).toLowerCase();
    let day = String(input[1]).toLowerCase();
    let quantity = Number(input[2]);

    let price = -1;

    if (day == "monday" || day == "tuesday" || day == "thursday" || day == "friday" || day == "wednesday") {
        if (fruit == "banana") {
            price = 2.50;
        }
        else if (fruit == "apple") {
            price = 1.20;
        }
        else if (fruit == "orange") {
            price = 0.85;
        }
        else if (fruit == "grapefruit") {
            price = 1.45;
        }
        else if (fruit == "kiwi") {
            price = 2.70;
        }
        else if (fruit == "pineapple") {
            price = 5.50;
        }
        else if (fruit == "grapes") {
            price = 3.85;
        }
    }
    else if (day == "saturday" || day == "sunday") {
        if (fruit == "banana") {
            price = 2.70;
        }
        else if (fruit == "apple") {
            price = 1.25;
        }
        else if (fruit == "orange") {
            price = 0.90;
        }
        else if (fruit == "grapefruit") {
            price = 1.60;
        }
        else if (fruit == "kiwi") {
            price = 3.00;
        }
        else if (fruit == "pineapple") {
            price = 5.60;
        }
        else if (fruit == "grapes") {
            price = 4.20;
        }
    }
    if (price >= 0) {
        console.log(quantity * price);
    }
    else {
        console.log('error')
    }
}
shop(['apple', 'Tuesday', '2']);
shop(['orange', 'Sunday', '3']);
shop(['kiwi', 'Monday', '2.5']);
shop(['grapes', 'Saturday', '0.5']);
shop(['tomato', 'Monday', '0.5']);