function solve(input) {
    'use strict';

    var inputAstext = input.join(' '),
        matches = inputAstext.match(/<a.*?>/gi) || [],
        numberOfMatches = matches.length,
        result = [],
        lengthOfMatch,
        haveEqual = false,
        mayBeHref = false,
        startRecording = false,
        recordSign = '',
        resultLine = '';

    for (var i = 0; i < numberOfMatches; i++) {
        lengthOfMatch = matches[i].length;

        for (var j = 0; j < lengthOfMatch; j++) {
            if (mayBeHref === false && matches[i][j].toLowerCase() === 'h') {
                if (matches[i][j + 1].toLowerCase() === 'r' && matches[i][j + 2].toLowerCase() === 'e' && matches[i][j + 3].toLowerCase() === 'f') {
                    mayBeHref = true;
                    j = j + 3;
                }
            } else if (mayBeHref === true) {
                if (haveEqual === false && (matches[i][j] === ' ' || matches[i][j] === '=')) {
                    haveEqual = true;
                } else if (haveEqual === true) {
                    if (startRecording === false && (matches[i][j] === "'" || matches[i][j] === '"')) {
                        recordSign = matches[i][j];
                        startRecording = true;
                    } else if (startRecording === true && matches[i][j] !== recordSign) {
                        resultLine += matches[i][j];
                    } else if (startRecording === true && matches[i][j] === recordSign) {
                        result.push(resultLine);
                        resultLine = '';
                        startRecording = false;
                        haveEqual = false;
                        mayBeHref = false;
                    }
                } else {
                    haveEqual = false;
                    mayBeHref = false;
                }
            }
        }
    }

    console.log(result.join('\n'));
}

solve(['<a href="http://softuni.bg" class="new"></a>']);
// solve(['<p>This text has no links</p>']);
// solve([
//     '<!DOCTYPE html>',
//     '<html>',
//     '<head>',
//     '<title>Hyperlinks</title>',
//     '<link href="theme.css" rel="stylesheet" />',
//     '</head>',
//     '<body>',
//     '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
//     'class="selected" href="/courses">Courses</a>',
//     '</li><li><a href =',
//     '\'/forum\' >Forum</a></li><li><a class="href"',
//     'onclick="go()" href= "#">Forum</a></li>',
//     '<li><a id="js" href =',
//     '"javascript:alert(\'hi\')" class="new">click</a></li>',
//     '<li><a id=\'nakov\' href =',
//     '\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul>',
//     '<a href="#"></a>',
//     '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\'',
//     'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
//     '<!-- This code is commented:',
//     '<a href="#commented">commentex hyperlink</a> -->',
//     '</body>'
// ]);