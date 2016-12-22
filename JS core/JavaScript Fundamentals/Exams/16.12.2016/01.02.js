function solve(input) {
    input = Number(input);
    let produced = 0;
    let days = 0;
    let consumation = 0;

    while (true) {
        if (produced < 26) {
            consumation = produced;
        }
        else {
            consumation = 26;
        }
        if (input >= 100) {
            consumation = 26;
            days++;
        }
        else {
            produced -= consumation;
            break;
        }

        produced += input - consumation;
        input -= 10;

    }
    console.log(days);
    console.log(produced)

}
solve('28');