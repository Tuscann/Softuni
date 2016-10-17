function vole(input) {

    let year = String(input[0]);
    let happyDaysNotSaturdaySunday = Number(input[1]);
    let countWeekends = Number(input[2]);

    let sofia = (48 - countWeekends) * (3 / 4);
    let soHappy = happyDaysNotSaturdaySunday * (2 / 3);
    let total = sofia + countWeekends + soHappy;

    if (year == 'leap') {
        total = total * 1.15
    }
    console.log(Math.floor(total));
}
vole(['leap', '5', '2']);
vole(['normal', '3', '2']);
vole(['leap', '2', '3']);
vole(['normal', '11', '6']);
vole(['leap', '0', '1']);
vole(['normal', '6', '13']);