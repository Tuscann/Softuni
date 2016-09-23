function tag(input) {
    let fileLocation = String(input[0]);
    let alternateText = String(input[1]);
    
    console.log("<img src=\""+fileLocation+"\" alt=\""+alternateText+"\">" );
}
tag(['smiley.gif', 'Smiley Face']);
