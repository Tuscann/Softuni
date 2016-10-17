function a(input) {


    let numberAllowedjumps = Number(input[0]);
    let lenghtTrack = Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        let curent = input[i].split(', ');
        let name = curent[0];
        let firstLeeter = name[0].toUpperCase();
        let jumpDistance = Number(curent[1]);



        // let position = 0;
        // if ((numberAllowedjumps*jumpDistance)%19) {
        //     position = lenghtMax;
        // }
        // else if (numberAllowedjumps + jumpDistance < lenghtMax) {
        //     position = numberAllowedjumps + jumpDistance;
        // }
        // else{
        //     position=numberAllowedjumps;
        // }


        console.log(parseInt((numberAllowedjumps*jumpDistance))%19);
    }
    // console.log(numberAllowedjumps);
    // console.log(lenghtTrack);
    //
    // console.log('#'.repeat(5) + '\n' + '#'.repeat(5));


}
a(["10", "19", "angel, 9", "Boris, 10", "Georgi, 3", "Dimitar, 7"]);