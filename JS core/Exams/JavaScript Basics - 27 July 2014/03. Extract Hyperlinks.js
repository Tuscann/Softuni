function a(input) {
    let str = '';

    for (let indexs in input) {
        str += input[indexs];
    }
    str = str.replace(/\s/g,'');  // премахва всички whitespace character
    var anchors = str.match(/<a[^>]+>/g); // търси всичко което започва със <a много символи след тях >

    var hrefs = [];
    for(var indexa in anchors) {
        if(anchors[indexa].match(/href\s*=\s*"[^"]+"/g)) {
            hrefs.push(anchors[indexa].match(/href\s*=\s*"[^"]+"/g).toString());
        }
        if(anchors[indexa].match(/href\s*=\s*'[^']+'/g)) {
            hrefs.push(anchors[indexa].match(/href\s*=\s*'[^']+'/g).toString());
        }
    }
    for(var indexc in hrefs) {
        if(hrefs[indexc].match(/="[^"]+"/g)) {
            console.log(hrefs[indexc].match(/="[^"]+"/g).toString().replace(/(=")|"/g, ''));
        }
        if(hrefs[indexc].match(/='[^']+'/g)) {
            console.log(hrefs[indexc].match(/='[^']+'/g).toString().replace(/(=')|'/g, ''));
        }
    }
    // console.log(hrefs);




}
a(['<a href="http://softuni.bg" class="new"></a>']);
// a(['<p>This text has no links</p>']);
//a(['<!DOCTYPE html>',
//     '<html>',
//     '<head>',
//     '  <title>Hyperlinks</title>',
//     '  <link href="theme.css" rel="stylesheet" />',
//     '</head>',
//     '<body>',
//     '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
//     ' class="selected" href="/courses">Courses</a>',
//     '</li><li><a href = ',
//     '\'/forum\' >Forum</a></li><li><a class="href"',
//     'onclick="go()" href= "#">Forum</a></li>',
//     '<li><a id="js" href =',
//     '"javascript:alert(\'hi\')" class="new">click</a></li>',
//     '<li><a id=\'nakov\' href =',
//     '\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul>',
//     '<a href="#"></a>',
//     '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\' ',
//     'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
//     '<!-- This code is commented:',
//     '  <a href="#commented">commentex hyperlink</a> -->',
//     '</body>']
// );