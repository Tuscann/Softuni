function a(input) {
    let Products = new Map();

    for (let i = 0; i < input.length; i++) {
        let cuureent = input[i].split(/\s+\|\s+/g);
        let town = cuureent[0];
        let product = cuureent[1];
        let price = cuureent[2];

        if (!Products.has(product)) {
            Products.set(product, new Map);
            Products.get(product).set(town, Number(price))
        }
    }
    for (let [product,towns] of Products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = 0;
        for (let [town,price]of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product}-> ${minPrice} (${minPriceTown})`);
    }
}
a([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);