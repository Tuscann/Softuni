function properties([firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue]) {
    return {
        [firstKey]: firstValue,
        [secondKey]: secondValue,
        [thirdKey]: thirdValue
    };
}
console.log(properties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(properties(['ssid', '90127461', 'status', 'admin', 'expires', '600']));