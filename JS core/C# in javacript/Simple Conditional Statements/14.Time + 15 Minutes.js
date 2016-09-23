function t(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalminutes = hour * 60 + minutes + 15;

    let realHours = parseInt(totalminutes / 60);
    let realminutes = totalminutes % 60;

    if(realHours==24){
        realHours=0;
    }
    if (realminutes<10){
        realminutes="0"+realminutes;
    }

    console.log(realHours + ":" + realminutes);
}
t(['1', '46']);
t(['0', '01']);
t(['23', '59']);
t(['11', '08']);
t(['12', '49']);