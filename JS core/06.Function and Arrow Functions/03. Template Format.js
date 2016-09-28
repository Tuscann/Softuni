function az(input) {

    let dictionary = input;
    let repeats = input.length;

    let string = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (i = 0; i < repeats; i += 2) {
        string += '  <question>\n    ' + dictionary[i] + '\n  </question>\n  <answer>\n    ' + dictionary[i + 1]+'\n  </answer>\n'
    }
    console.log(string + '</quiz>');

}
az(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);