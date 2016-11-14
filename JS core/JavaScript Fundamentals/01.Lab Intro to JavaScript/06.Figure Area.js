function Area(input) {

    let w = Number(input[0]);
    let h = Number(input[1]);
    let W = Number(input[2]);
    let H = Number(input[3]);

    let s1 = w * h;
    let s2 = W * H;
    let s3 = Math.min(w, W) * Math.min(h, H);

    return s1 + s2 - s3;
}
console.log(Area(['2', '4', '5', '3']));
console.log(Area(['13', '2', '5', '8']));