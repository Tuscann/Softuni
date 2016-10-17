function pass (input) {
    let password=String(input[0]);

    if(password=='s3cr3t!P@ssw0rd'){
        console.log('Welcome');
    }
    else{
        console.log("Wrong password!");
    }
}
pass(['qwerty']);
pass(['s3cr3t!P@ssw0rd']);
pass(['s3cr3t!p@ss']);