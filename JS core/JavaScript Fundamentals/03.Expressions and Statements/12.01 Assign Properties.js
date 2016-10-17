function properties(input) {
    let obj = {};
    let name = input[0];
    let age = input[2];
    let gender = input[4];
    obj[name] = input[1];
    obj[age] = input[3];
    obj[gender] = input[5];
    console.log(obj);
}
properties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
properties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);