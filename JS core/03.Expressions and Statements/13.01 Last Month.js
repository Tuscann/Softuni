function lastMonthlastDay([day, month, year]){
    let date = new Date(year,month-1,day);

    let oneDay = 1000 * 60 * 60 * 24; // един ден в секунди
    let newDate = new Date(date.setDate(1));  //задаме със едно да последния ден от месеца

    //newDate.getTime милисекунди от 12.01.1970 до сега

    newDate = new Date(newDate.getTime() - oneDay);
    console.log(newDate.getDate()); //показва датата като разлика 1970 до тарсената дата пресметната във милисекунди
}
lastMonthlastDay(['17','3','2002'])