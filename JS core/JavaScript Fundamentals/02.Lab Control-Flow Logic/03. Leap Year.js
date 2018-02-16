function filterByAge(year) {

    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        return "yes"
    }
    else {
        return "no"
    }
}

console.log(filterByAge(1999));
console.log(filterByAge(2000));
console.log(filterByAge(1900));