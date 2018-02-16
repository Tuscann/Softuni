function filterByAge(minimAge, firstperson, firstAge, seconderName, secondAge) {

    if (minimAge <= firstAge && minimAge <= secondAge) {

        console.log("{ name: '" + firstperson + "', age: " + firstAge + " }");
        console.log("{ name: '" + seconderName + "', age: " + secondAge + " }");
    }
    else if (minimAge <= firstAge) {
        console.log("{ name: '" + firstperson + "', age: " + firstAge + " }")
    }
    else if (minimAge <= secondAge) {
        console.log("{ name: '" + seconderName + "', age: " + firstAge + " }")
    }
}
filterByAge(12, 'Ivan', 15, 'Asen', 9);
filterByAge(19, 'Pesho', 119, 'Gosho', 20);



-----------------------------------------


function filterByAge(minAge, nameA, ageA, nameB, ageB) {

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

filterByAge(12, 'Ivan', 15, 'Asen', 9);
filterByAge(19, 'Pesho', 119, 'Gosho', 20);


