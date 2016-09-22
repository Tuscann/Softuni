function filterByAge(input) {

    let minAge = Number(input[0]);
    let nameA = String(input[1]);
    let ageA = Number(input[2]);
    let nameB = String(input[3]);
    let ageB = Number(input[4]);

    let personA = {name: nameA, age: Number(ageA)};
    let personB = {name: nameB, age: Number(ageB)};
    if (personA.age >= minAge)
    {
        console.log(personA)
    }
    if (personB.age >= minAge)
    {
        console.log(personB)
    }
}
filterByAge(['12', 'Ivan', '15', 'Asen', '9']);
filterByAge(['19', 'Pesho', '119', 'Gosho', '20']);

