function a(input) {
    let object = {};
    for (i = 0; i < input.length; i++) {
        let elements = input[i].split(' -> ');
        let key = elements[0];
        let value = (elements[1]);

        object[key] = value;
    }
    console.log(JSON.stringify(object));
}
a([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'

]);