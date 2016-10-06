function a(input) {

    let total = new Map();
    for (let i = 0; i < input.length; i++) {
        let curent = input[i].split(' | ');
        let carBrand = curent[0];
        let carModel = curent[1];
        let producedCars = Number(curent[2]);

        if (!total.has(carBrand)) {
            total.set(carBrand, new Map)
        }
        if (!total.get(carBrand).has(carModel)) {
            total.get(carBrand).set(carModel, 0)
        }
        total.get(carBrand).set(carModel, total.get(carBrand).get(carModel) + producedCars)
    }
    for (let [carBrand,carModel]of total) {
        console.log(carBrand);
        for (let [model,quantity] of carModel) {
            console.log("###" + model + " -> " + quantity);
        }
    }
}
a(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]);