function a(input) {

    let x = 0;
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        x+=Number(current);

    }
    console.log(x.toString());

}
a(['2', '4', '5', '6',]);
