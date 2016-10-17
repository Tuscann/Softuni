function money(input) {

    let USD = Number(input[0]);
    let leva=USD*1.79549;

    console.log(leva.toFixed(2)+" BGN");

}
money(['20']);