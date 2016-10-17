function az(input) {

    let NumberArray = input.map(Number);

    for (let i = 0; i < NumberArray.length; i += 2) {
        let x1 = NumberArray[i];
        let y1 = NumberArray[i + 1];

        if (x1 >= 0 && x1 <= 2 && y1 >= 6 && y1 <= 8){
            console.log('Tonga');
        }
        else if (x1 >= 4 && x1 <= 9 && y1 >= 7 && y1 <= 8){
            console.log('Cook');
        }
        else if (x1 >= 1 && x1 <= 3 && y1 >= 1 && y1 <= 3){
            console.log('Tuvalu');
        }
        else if (x1 >= 5 && x1 <= 7 && y1 >= 3 && y1 <= 6){
            console.log('Samoa');
        }
        else if (x1 >= 8 && x1 <= 9 && y1 >= 0 && y1 <= 1){
            console.log('Tokelau');
        }
        else{
            console.log('On the bottom of the ocean');
        }
    }
}
az([4, 2, 1.5, 6.5, 1, 3]);