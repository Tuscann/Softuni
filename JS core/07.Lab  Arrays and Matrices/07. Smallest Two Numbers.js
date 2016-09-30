function az(input) {
    let array = input.sort((a, b)=>a - b)
        .slice(0, 2)
        .join(' ');
    console.log(array);
}
az(['30', '15', '50', '5']);