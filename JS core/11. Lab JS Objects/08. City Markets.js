function cityMarkets(input) {
    let townsWithProducts = new Map();
    for (let sale of input) {// за всеки ред
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/); //по -> разделяме на 3 части
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);  // по две точки разделяме на две части

        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());  // правим нов map
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }


    for (das of townsWithProducts) {
        console.log('Town - ' + townsWithProducts.get());
    }

    // TODO: print the incomes by towns and products
}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3'])