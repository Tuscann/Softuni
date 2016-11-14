function as(input) {
    let speed = Number(input[0]);
    let limitation = String(input[1]);

    if (limitation == 'residential') {
        let resintalSpeed = 20;
        if (speed > resintalSpeed) {
            if (speed <= resintalSpeed + 20) {
                console.log('speeding');
            }
            if (speed > resintalSpeed + 20 && speed <= resintalSpeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > resintalSpeed + 40) {
                console.log('reckless driving');
            }
        }
    }
    else if (limitation == 'city') {
        let cistyspeed = 50;
        if (speed > cistyspeed) {
            if (speed <= cistyspeed + 20) {
                console.log('speeding');
            }
            if (speed > cistyspeed + 20 && speed <= cistyspeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > cistyspeed + 40) {
                console.log('reckless driving');
            }
        }
    }
    else if (limitation == 'interstate') {

        let interstateSpeed = 90;
        if (speed > interstateSpeed) {
            if (speed <= interstateSpeed + 20) {
                console.log('speeding');
            }
            else if (speed > interstateSpeed + 20 && speed <= interstateSpeed + 40) {
                console.log('excessive speeding');
            }
            else if (speed > interstateSpeed + 40) {
                console.log('reckless driving');
            }
        }
    }
    else if (limitation == 'motorway') {

        let motorspeed = 130;
        if (speed > motorspeed) {
            if (speed <= motorspeed + 20) {
                console.log('speeding');
            }
            else if (speed > motorspeed + 20 && speed <= motorspeed + 40) {
                console.log('excessive speeding');
            }
            else if (speed > motorspeed + 40) {
                console.log('reckless driving');
            }
        }
    }
}
as(['12', 'residential']);
// as(['22', 'residential']);
// as(['42', 'residential']);
// as(['62', 'residential']);
// as(['45', 'city']);
// as(['65', 'city']);
// as(['85', 'city']);
// as(['105', 'city']);
// as(['80', 'interstate']);
// as(['100', 'interstate']);
// as(['120', 'interstate']);
// as(['140', 'interstate']);
// as(['120', 'motorway']);
// as(['140', 'motorway']);
// as(['160', 'motorway']);
// as(['180', 'motorway']);