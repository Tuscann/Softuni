function numbers(w, h, W, H) {
    let s1 = w * h;
    let s2 = W * H;
    let s3 = Math.min(w, W) * Math.min(h, H);

    return s1 + s2 - s3;
}
console.log(numbers(2, 4, 5, 3));
