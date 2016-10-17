function validityChecker(input) {

    let [x1, y1, x2, y2] = input.map(Number);

    function findDistance(x1, y1,x2, y2){
        let dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return dist;
    }

    function isInteger(distance) {
        if (distance == Math.round(distance)){
            return true;
        }
        return false;
    }

    let distance01 = findDistance(0,0,x1, y1);
    let distance02 = findDistance(0, 0, x2, y2);
    let distance12 = findDistance(x1, y1, x2, y2);

    function printResult(distance, x1, y1, x2, y2) {
        if (isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    printResult(distance01, x1, y1, 0, 0);
    printResult(distance02, x2, y2, 0, 0);
    printResult(distance12, x1, y1, x2, y2);
}

validityChecker(['2','1','1','1']);