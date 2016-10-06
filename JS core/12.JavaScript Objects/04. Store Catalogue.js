function a(input) {

    let cataloge = new Map;

    for (let i = 0; i < input.length; i++) {
        let curent = input[i].split(':');

        let productName = curent[0];
        let productPrice = Number(curent[1]);
        let productFistLetter = productName[0];


        if (!cataloge.has(productFistLetter)) {

            cataloge.set(productFistLetter, new Map())
        }
        if (!cataloge.get(productFistLetter).has(productName)) {
            cataloge.get(productFistLetter).set(productName, 0)
        }
        cataloge.get(productFistLetter).set(productName, productPrice)
    }
    function alphabeticalSort(a, b) {
        return a[0].localeCompare(b[0])
    }
    let sortedInitials = [...cataloge].sort(alphabeticalSort);

    for (let [key,value]of sortedInitials) {
        console.log(key);
        let sortedProdcuts = [...value].sort(alphabeticalSort);
        for (let [products,price] of sortedProdcuts) {
            console.log("  " + products.trim() + ": " + price);
        }
    }


}
a(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);