function t(input) {
    let animal = String(input[0]);

    if(animal=='crocodile'||animal=='snake'||animal=='tortoise'){
        console.log("reptile");
    }
    else if(animal=='dog'){
        console.log('mammal');
    }
    else{
        console.log('unknown');
    }
}
t(['dog']);
t(['dossssg']);
t(['snake']);