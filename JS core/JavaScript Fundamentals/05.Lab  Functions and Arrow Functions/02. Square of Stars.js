function sa(input) {
    if (!isNaN(input[0])) {  //връща true/false в зависимост дали подаденият параметър е число или дали може да бъде парснат към число. Ако е или може  - false, ако не  true.
        for (let row = 0; row < Number(input[0]); row++) {
            console.log("*" + " *".repeat(Number(input[0]) - 1));
        }
    }
    else {
        for (let row = 0; row < 5; row++) {
            console.log("*" + " *".repeat(5 - 1));
        }
    }
}
// sa(['12']);
sa(['q2']);