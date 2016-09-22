/**
 * Created by 123 on 22.9.2016 г..
 */
function now(input) {

    let artistName = String(input[0]);
    let trackName = String(input[1]);
    let duration = String(input[2]);

    // console.log("Now Playing: " + trackName + " - " + artistName + " [" + duration+']');
    console.log(`Now Playing: ${input[1]} - ${input[0]} [${input[2]}]`);

}
now(['Number One', 'Nelly', '4:09']);