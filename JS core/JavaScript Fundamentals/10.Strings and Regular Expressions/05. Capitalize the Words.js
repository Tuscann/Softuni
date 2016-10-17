function a(input) {

    let cuurent = input[0].split(' ')
        .map(ch=>ch.substring(0, 1).toUpperCase()
        + ch.substring(1, ch.length).toLowerCase())
        .join(' ');

    console.log(cuurent);
}
a(['Capitalize these words']);
a(['Was that Easy? tRY thIs onE for SiZe!']);