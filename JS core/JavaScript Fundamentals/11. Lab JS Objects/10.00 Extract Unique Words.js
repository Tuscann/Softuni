function a(input) {
    let x = [];

    for (let i = 0; i < input.length; i++) {
        let cuurentSentence = input[i].toLowerCase().split(',').join('');

        cuurentSentence = cuurentSentence
            .split(/\s+/)
            .filter(function (v, i, o) {
                return v !== o[i - 1];
            });
        x.push(cuurentSentence)
    }


    x.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    });
    x = x.toString().split('.').join('').split(',').join(' ').split(' ').join(', ');

    console.log(x);

}
a(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);