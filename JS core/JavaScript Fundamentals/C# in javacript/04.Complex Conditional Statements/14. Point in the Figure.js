function fig(input) {
    [h, x, y] = input.map(Number);

    if ((x >= 0) && (x <= 3 * h) && (y >= 0) && (y <= h))
    {
        if ((x > 0) && (x < 3 * h) && (y > 0) && (y < h)) { console.log("inside"); }
        else if ((x > h) && (x < 2 * h) && (y == h)) { console.log("inside"); }
        else { console.log("border"); }
    }
    else if ((x >= h) && (x <= 2 * h) && (y >= h) && (y <= 4 * h))
    {
        if ((x > h) && (x < 2 * h) && (y > h) && (y < 4 * h)) { console.log("inside"); }
        else if ((x > h) && (x < 2 * h) && (y == h)) { console.log("inside"); }
        else { console.log("border"); }
    }
    else { console.log("outside"); }
}
fig(['2', '3', '10']);
fig(['2', '3', '1']);
fig(['2', '2', '2']);
fig(['2', '6', '0']);
fig(['2', '0', '6']);
