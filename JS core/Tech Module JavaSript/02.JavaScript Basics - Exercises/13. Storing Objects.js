function ь(input) {

    let person = [];
    for (i = 0; i < input.length; i++) {
        let current = input[i].split(' -> ');
        let name = current[0];
        let age = current[1];
        let grade = current[2];
        let str = '{ "Name" : "' + name + '", "Age" : ' + age + ', "Grade" : "' + grade + '" }';
        let object = JSON.parse(str);  //прави стринга на обект
        person.push(object);  // добавяме нов обект във array
    }

        for (let obj of person){
            console.log("Name: " + obj.Name);
            console.log("Age: " + obj.Age);
            console.log("Grade: " + obj.Grade);
        }
}
ь(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57']);