function a(input) {
    let counter = 0;
    let average = 0;
    let last = input.slice(-1).pop().trim();

    for (i = 0; i < input.length - 1; i++) {

        let cerent = input[i].split(/\s+/g);
        let student = cerent[0];
        let cources = cerent[1];
        let examPoints = Number(cerent[2]);
        let courseBonuses = Number(cerent[3]);

        let total = examPoints * 0.2 + courseBonuses;

        let gradesss = ((total / 80) * 4) + 2;

        if (gradesss > 6) {
            gradesss = 6
        }
        if (cources == last) {
            average += examPoints;
            counter++;
        }
        if (examPoints < 100) {
            console.log(student + ' failed at ' + '"' + cources + '"');
        }
        else {
            console.log(student + ": Exam - " + '"' + cources + '"' + '; Points - ' + parseFloat(total.toFixed(2)) + "; Grade - " + gradesss.toFixed(2));
        }
    }
    console.log('"' + last + '"' + ' average points -> ' + parseFloat((average / counter).toFixed(2)));

}

a(["EDUU    JS-Basics                317          15         ", "           RoYaL        HTML5        121         10        ", "ApovBerger      OOP   0    10     ", "Stamat OOP   190 10", "MINKA OOP   230 10", "   OOP"]);
//a( ["Student1 C#-Advanced 100 3","Student2 C#-Advanced 157 3","Student3 C#-Advanced 317 12","Student4 C#-Advanced 57 15","Student5 C#-Advanced 157 15","Student6 C#-Advanced 333 7","Student7 C#-Advanced 222 6","Student8 C#-Advanced 111 15","Student9 C#-Advanced 99 1","Student10 C#-Advanced 0 0","Student11 C#-Advanced 236 0","Student12 C#-Advanced 150 0","Student13 C#-Advanced 77 1","Student14 C#-Advanced 390 12","Student15 C#-Advanced 100 10","C#-Advanced"]);