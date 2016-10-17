function person(input) {

    let age = Number(input[0]);
    let gender = String(input[1]);

    if(age>=16&&gender=='m'){
        console.log('Mr.');
    }
    else if(age<16&&gender=='m'){
        console.log('Master');
    }
    else if(age>=16&&gender=='f'){
        console.log('Ms.');
    }
    else if(age<16&&gender=='f'){
        console.log('Miss');
    }



}
person(['12', 'f']);
person(['17', 'm']);
person(['25', 'f']);
person(['13.5', 'm']);