/**
 * Created by 123 on 22.9.2016 г..
 */
function properties(input) {

    let x1 = String(input[0]);
    let x2 = String(input[1]);
    let x3 = String(input[2]);
    let x4 = String(input[3]);
    let x5 = String(input[4]);
    let x6 = String(input[5]);

    console.log("{ "+x1 + ": \'" + x2 + "\', "  + x3 + ": \'" + x4 + "\', "+x5+": \'"+x6+"\'"+" }");
}
properties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
properties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);