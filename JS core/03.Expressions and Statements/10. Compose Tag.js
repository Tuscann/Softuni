/**
 * Created by 123 on 22.9.2016 г..
 */
function tag(input) {

    let fileLocation = String(input[0]);
    let alternateText = String(input[1]);
    
    console.log("<img src=\""+fileLocation+"\" alt=\""+alternateText+"\">" );
}
tag(['smiley.gif', 'Smiley Face']);
