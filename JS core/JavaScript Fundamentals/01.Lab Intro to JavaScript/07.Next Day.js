function numbers(year, month, day) {

    let today = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let tomorrow = new Date(today.getTime() + oneDay);
    return tomorrow.getFullYear() + "-" +
        (tomorrow.getMonth() + 1) + '-' +
        tomorrow.getDate();
}
console.log(numbers(2016, 9, 30));

