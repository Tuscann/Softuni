let managementFunction = (function managementFunction() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (data) {
        data = data.split(/\s+/g);

        let  recipes = {
            apple: {carbohydrate: 1, flavour: 2},
            coke: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            omelet: {protein: 5, fat: 1, flavour: 1},
            cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        };
        let action = data[0];
        let arg = data[1];
        let quantity = Number(data[2]);

        let robot = {
            restock: (ing, qty) => {
                ingredients[ing] += qty;
                return "Success";
                //console.log("Success");
            },
            prepare: (rec, qty) => {
                let ingr = Object.keys(recipes[rec]);
                let recipe = recipes[rec];

                let success = true;
                for (let key of ingr){
                    if (ingredients[key] < recipe[key] * qty){
                        success = false;
                        return `Error: not enough ${key} in stock`;
                    }
                }

                if (success){
                    for (let key of ingr){
                        ingredients[key] -= recipe[key] * qty;
                    }
                    return "Success";
                }
            },
            report: () => {
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
                //console.log(`protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`)
            }
        };


        return robot[action](arg, quantity);
    }
})();

//managementFunction('report');
console.log(managementFunction('restock flavour 50'));


