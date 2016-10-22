function solve(arr) {
    let rects = [];
    for(let [w,h] of arr){
        let r = createRect(w,h);
        rects.push(r);
    }
    let big = rects.sort((a,b)=> a.compareTo(b));
    return big;
    function createRect(w, h) {
        let rect = {
            width: w,
            height: h,
            area: ()=> rect.width * rect.height,
            compareTo: function (other) {
                if(rect.area() > other.area()){
                    return -1;
                }else if( rect.area() < other.area()){
                    return 1;
                }
                else{
                    if(rect.width > other.width){
                        return -1;
                    }else if(rect.width < other.width){
                        return 1;
                    }
                    return 0;
                }

            }
        };
        return rect;
    }
}
console.log(solve([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]])
);