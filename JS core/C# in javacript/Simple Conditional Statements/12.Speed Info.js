function info(input) {

    let speed = Number(input[0]);
    if (speed <= 10) {
        console.log("slow");
    }
    else if (speed > 10 && speed <= 50) {
        console.log("average");
    }
    else if(speed>50&&speed<=150){
        console.log("fast");
    }
    else if(speed>150&&speed<=1000){
        console.log("ultra fast");
    }
    else if(speed>1000){
        console.log("extremely fast");
    }
}
info(['8']);
info(['49.5']);
info(['126']);
info(['160']);
info(['2160']);