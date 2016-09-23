function data(input) {
    let firstname = String(input[0]);
    let lastname = String(input[1]);
    let age = Number(input[2]);
    let town = String(input[3]);

    console.log('You are '+ firstname + ' ' + lastname + ', a '+ age +"-years old person from " + town + ".");
}
data(['Zhivko', 'Nedqlkov', "23", 'Varna']);
data(['Светлин', 'Наков', "29", 'Велико Търново']);