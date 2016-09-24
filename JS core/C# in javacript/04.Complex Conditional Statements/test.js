function test ([year, month, day]) {

    let text = "" + year + "-" + month + "-" + day;
    let date = new Date("yyyy-M-d", text);
    date.setDate(date.getDate() + 1);
    return date;
}
console.log(test(['1997','12','2']));