function a(input) {

    let gradus = Number(input[0]);
    let farenhait = gradus * (9 / 5) + 32;

    console.log(farenhait.toFixed(2));
}
a([25]);