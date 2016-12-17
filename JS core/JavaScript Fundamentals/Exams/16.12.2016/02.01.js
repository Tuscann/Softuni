function solve(input) {
    const CONCRETE_PRICE = 1900;
    const CONCRETE_PER_FOOT = 195;

    let wall = input.map(Number);
    let concreteUsed = 0;
    let days = [];

    while (true) {
        let hasWorked = false;

        let dailyUsedConcrete = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i] += 1;
                dailyUsedConcrete += CONCRETE_PER_FOOT;
                hasWorked = true;
            }
        }

        if (!hasWorked)
            break;

        days.push(dailyUsedConcrete);
        concreteUsed += dailyUsedConcrete;
    }

    console.log(days.join(', '));
    console.log(concreteUsed * CONCRETE_PRICE + " pesos");
}

solve([21, 25, 28]);
solve([17]);
solve([17, 22, 17, 19, 17]);
