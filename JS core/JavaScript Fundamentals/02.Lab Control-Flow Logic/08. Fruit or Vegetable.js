function circleArea(a) {
    let fruits = ['banana', "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];

    if (fruits.indexOf(a) > -1) {
        return "fruit";
    }
    else if (a === "tomato" || a === "cucumber" || a === "pepper" || a === "onion" || a === "garlic" || a === "parsley") {
        return "vegetable";
    }
    else {
        return "unknown";
    }
}
console.log(circleArea("banana"));
console.log(circleArea("cucumber"));
console.log(circleArea("pizza"));