/**
 * Created by 123 on 21.9.2016 г..
 */
function area(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let area=a*b;
    let perimetar=2*(a+b);

    console.log(area+"\n"+perimetar);
}
area(['2','2']);
area(['1','3']);
area(['2.5','3.14']);