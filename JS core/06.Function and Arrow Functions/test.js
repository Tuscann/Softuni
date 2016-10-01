function radioCrystals(input) {
    input = input.map(Number);

    let desired = input[0];

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return  crystal * 0.8;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }


    for (let i = 1; i < input.length; i++){
        let current = input[i];

        console.log(`Processing chunk ${current} microns`);

        let op = 'Cut';
        let times = 0;
        let cutSize = cut(current);
        while (cutSize >= desired || (parseInt(desired - cutSize) === 1)){
            current = cutSize;
            times++;
            cutSize = cut(current);
        }

        if (times > 0){
            console.log(`${op} x${times}`);
            current = transportAndWash(current);
            times = 0;
        }

        op = "Lap";
        let lapSize = lap(current);
        while (lapSize >= desired || (parseInt(desired - lapSize) === 1)){
            current = lapSize;
            times++;
            lapSize = lap(current);
        }

        if (times > 0){
            console.log(`${op} x${times}`);
            current = transportAndWash(current);
            times = 0;
        }

        op = "Grind";
        let grindSize = grind(current);
        while (grindSize >= desired || (parseInt(desired - grindSize) === 1)){
            current = grindSize;
            times++;
            grindSize = grind(current);
        }

        if (times > 0){
            console.log(`${op} x${times}`);
            current = transportAndWash(current);
            times = 0;
        }

        op = "Etch";
        let etchSize = etch(current);
        while (etchSize >= desired || (parseInt(desired - etchSize) === 1)){
            current = etchSize;
            times++;
            etchSize = etch(current);
        }

        if (times > 0){
            console.log(`${op} x${times}`);
            current = transportAndWash(current);
            times = 0;
        }


        if (parseInt(desired - current) === 1){
            console.log(`X-ray x1`);
        }
    }

    console.log(`Finished crystal ${desired} microns`);
}

// radioCrystals([1000, 4000, 8100]);
radioCrystals(['100', '100.1', '101.9', '102']);