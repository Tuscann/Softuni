function as (arr) {
    let speed = Number(arr[0]);
    let place = arr[1].toLowerCase();

    isInSpeedLimit(speed, place);

    function isInSpeedLimit (speed, place) {
        let speedLimits = { 'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20 };

        if (speed <= speedLimits[place]) {

        } else {
            if (speed - speedLimits[place] <= 20) {
                console.log('speeding')
            } else if (speed - speedLimits[place] <= 40) {
                console.log('excessive speeding')
            } else {
                console.log('reckless driving')
            }
        }
    }
}
// as(['12', 'residential']);
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