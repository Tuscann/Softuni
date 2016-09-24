function number (input) {

    let n=Number(input[0]);

    if((n>=100&&n<=200)||(n==0)){
        console.log('');
    }
    else{
        console.log('invalid');
    }
}
number(['75']);
number(['150']);
number(['220']);
number(['199']);
number(['-1']);
number(['100']);
number(['250']);
number(['0']);