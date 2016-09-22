function choose(input) {
    let word = String(input);

    if (word == "banana"||word == "apple"||word == "kiwi"||word == "cherry"||word == "lemon"||word == "grapes"||word == "peach") {
        console.log("fruit")
    }
    else if(word == "tomato"||word == "cucumber"||word == "pepper"||word == "onion"||word == "garlic"||word == "parsley"){
        console.log("vegetable")
    }
    else{
        console.log("unknown")
    }
    // let fruits = [banana, apple, kiwi, cherry, lemon, grapes, peach];

    // if(fruits.contains(word)){
    //     console.log("fruit")
    // }
}
choose('banana');
choose('cucumber');
choose('pizza');
choose('lemon');
