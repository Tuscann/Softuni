function setObjects(input) {

    let objects=[];
    for(let i = 0; i < input.length; i++){
        let object = JSON.parse(input[i]);
        objects.push(object)
    }

    for (let object of objects){
        console.log("Name: " + object.name);
        console.log("Age: " + object.age);
        console.log("Date: " + object.date);
    }
}
setObjects(['{"name":"Gosho","age":10,"date":"19/06/2005"}']);