function solve() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=";
    let authentication = "Basic " + btoa("guest:guest");
    let message = "Knock Knock.";

    function call() {
        $.ajax({
            method: "GET",
            url: baseUrl + message,
            headers: {
                "Authorization": authentication,
                "Content-Type": "application.json"
            }
        }).then((answer)=> {
        //console.dir(answer);
            console.log(message + '\n' + answer.answer);
            message = answer.message;
            call()
        }).catch(function() { console.log("Finish") }
        )
    }
    call()

}