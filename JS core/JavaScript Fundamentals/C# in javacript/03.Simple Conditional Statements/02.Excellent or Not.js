function grade(input) {
    let ozenka = Number(input);

    if (ozenka >= 5.50 && ozenka <= 6.00) {
        console.log("Excellent!");
    }
    else {
        console.log("Not excellent.");
    }

}
grade(['5.7']);
grade(['5.47']);