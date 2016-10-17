function checkPalindrom([string]) {
    return string === string.split('').reverse().join('');

}
console.log(checkPalindrom(["haha"]));
console.log(checkPalindrom(["abcccba"]));
console.log(checkPalindrom('racecar'));
console.log(checkPalindrom('unitinu'));