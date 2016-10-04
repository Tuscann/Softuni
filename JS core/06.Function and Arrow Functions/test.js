function dist([x1,y1,x2,y2,x3,y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    let arr = [];
    let d1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let d2 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    let d3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    arr.push(d1, d2, d3);
    arr = arr.sort(function(a, b){return a-b});
    let result = arr[0] + arr[1];
    console.log(calc(d1, d2, d3) + ': ' + result);

    function calc(d1, d2, d3) {
        if (d1 == d2 || d2 == d3 || d1 == d3) {
            return "1->2->3";
        }
        else if (d1 > d2 && d1 > d3) {
            if (d2 > d3) return "1->2->3";
            else if (d2 < d3) return "1->3->2";
        }
        else if (d2 > d1 && d2 > d3) {
            if (d1 > d3) return "2->1->3";
            else if (d1 < d3) return "2->3->1";
        }
        else if (d3 > d1 && d3 > d2) {
            if (d1 > d2) return "3->1->2";
            else if (d1 < d2) return "3->2->1";
        }
    }
}
dist([5, 1, 1, 1, 5, 4]);
dist([0, 0, 2, 0, 4, 0]);
dist([-1, -2, 3.5, 0, 0, 2]);