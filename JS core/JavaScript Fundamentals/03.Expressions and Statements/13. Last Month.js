function LastMonth(input) {

    let month = Number(input[1]);
    let year = Number(input[2]);
    let dates = Number(input[3]);

    let date = new Date(year, month - 1); // datetime обект със месец един по малък датата не ме интересува
    // let mounth = date.getMonth(); // вземам кои месец е
     date.setDate(0); //задава деня да е последния ден от предния месец защота не съм задал дата ако е 0
    // е последния ден от месеца ако 1 първия ден от месеца

    console.log(date.getDate()); //показва последния ден от месеца
    // console.log(mounth);
}
LastMonth(['17', '3', '2002']);
LastMonth(['13', '12', '2004']);