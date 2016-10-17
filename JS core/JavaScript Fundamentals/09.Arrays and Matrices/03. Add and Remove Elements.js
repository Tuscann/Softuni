function addRemove(input) {

    let begin = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            begin.push(i + 1)
        }
        if (input[i] == 'remove') {
            begin.pop()
        }
    }
    if (begin.length == 0) {
        console.log('Empty');
    }
    else {

        for ( let k = 0; k < begin.length; k++)
        {
          console.log(begin[k]);
        }
    }
}
addRemove(['add', 'add', 'remove', 'add', 'add']);
//addRemove(['add','add','add','add']);