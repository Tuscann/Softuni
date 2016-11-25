function dayt(input) {

    let total = input[0].split("-");

    let date = Number(total[0]);
    let mouth = Number(total[1]);
    let year = Number(total[2]);

    let today = new Date(year, mouth-1 , date);
    // console.log(today);
    let duration = 1000;

    var timeee = (today.setTime(today.getTime()) + (duration * 24 * 60 * 60 * 1000));

    var a = new Date(timeee);
    console.log(a.getDate()+"-"+a.getMonth()+"-"+a.getFullYear());
}
dayt(['25-02-1995']);
// dayt(['07.-11-2003']);
// dayt(['30-12-2002']);
// dayt(['01-01-2012']);
dayt(['14-06-1980']);

