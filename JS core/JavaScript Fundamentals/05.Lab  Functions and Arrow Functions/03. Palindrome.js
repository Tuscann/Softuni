function checkPalindrom([str]) {

    let flag = "";

    for (let i = 0; i < str.length ; i++) {
        if (str[i] != str[str.length - i - 1]) {
            flag = 'false'
        }
        else{
            flag = 'true';
        }
    }
    console.log(flag);
}

checkPalindrom(["haha"]);
checkPalindrom(["abcccba"]);
checkPalindrom('racecar');
checkPalindrom('unitinu');
