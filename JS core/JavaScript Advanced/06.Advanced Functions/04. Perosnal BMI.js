function result(name, age, weight, height) {
    let bmi = '';
    let obj = {
        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI: (() => {
            let meters = height / 100;
            return bmi = Math.round(weight / (meters * meters))
        })(),
        status: (() => {
            if (bmi < 18.5) {
                return 'underweight'
            } else if (bmi < 25) {
                return 'normal'
            } else if (bmi < 30) {
                return 'overweight'
            } else {
                return 'obese'
            }
        })()
    };
    if (obj.status) {
        obj['recommendation'] = 'admission required';
    }
    return obj;
}
//console.log(result('Peter', '29', '75', '182'));
console.log(result('Honey Boo Boo', '9', '57', '137'));