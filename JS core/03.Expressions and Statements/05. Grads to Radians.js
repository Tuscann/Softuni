/**
 * Created by 123 on 21.9.2016 г..
 */
function radians(input) {
    let grads = Number(input[0]);

    let diff = (400 / 360);

    if (grads > 360) {
        grads = (grads % 400) / diff;
    }
    else if (grads < 0) {
        grads = 360 + grads / diff;
    }
    else {
        grads = grads / diff;
    }
    console.log(grads);
}
radians(['100']);
radians(['400']);
radians(['850']);
radians(['-50']);
radians(['-410']);