function az(input) {
    let array = input.sort((a, b)=>a - b);
    console.log(array.slice(0,2).join(' '));
}
az(['30', '15', '50', '5']);