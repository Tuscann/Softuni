function sec([t1,t2,t3]) {
    [t1, t2, t3] = [t1, t2, t3].map(Number);
    let total = t1 + t2 + t3;
    let min = parseInt(total / 60);
    let sec = total % 60;

    if (sec < 10) {
        console.log(min + ":" + 0 + sec);
    }
    else {
        console.log(min + ":" + sec);
    }
}
sec(['35', '45', '44']);
sec(['22', '7', '34']);
sec(['50', '50', '49']);
sec(['14', '12', '10']);