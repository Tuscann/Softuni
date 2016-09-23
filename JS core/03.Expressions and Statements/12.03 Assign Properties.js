function createObject(input){
    let nameKey = input[0];
    let nameVal = input[1];
    let ageKey = input[2];
    let ageVal = input[3];
    let genderKey = input[4];
    let genderVal = input[5];

    let obj = {[nameKey]:nameVal, [ageKey]: ageVal, [genderKey]: genderVal};
    console.log(obj);
}

createObject(['name', 'Pesho', 'age', '23', 'gender', 'male'])