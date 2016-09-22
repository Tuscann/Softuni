function radians (input) {
    let grads = Number(input[0]);
    let cels = 0.9 * grads;

    cels <= 0 ? cels = 360 + (cels % 360) : cels >= 360 ? cels = cels % 360 : cels;
    console.log(cels)
}
radians(['-1']);
radians(['0']);
radians(['1']);
radians(['100']);
radians(['200']);
radians(['300']);
radians(['400']);
radians(['401']);
radians(['-410']);