function az(input) {

    let string = String(input);

    for (let i = 0; i < string.length; i++) {

        console.log("str[" + i + "] -> " + string[i]);
    }
}
az(['Hello, World!']);