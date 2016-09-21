/**
 * Created by 123 on 21.9.2016 г..
 */
function distance(input) {
    let v1 = Number(input[0])*1000; /** превръщам в метри**/
    let v2 = Number(input[1])*1000; /** превръщам в метри**/
    let time = Number(input[2])/3600;
    /** превръщам секундите във часове **/

    let s = Math.abs(v1 * time - v2 * time);
    console.log(s);

}
distance(['0','60','3600'])
distance([11, 10, 120])
distance([5, -5, 40])