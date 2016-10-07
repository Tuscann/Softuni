function a(input) {

    let total = new Map;
    for (let i = 0; i < input.length; i++) {

        let curent = input[i].split(' | ');
        let systemName = curent[0];
        let componentName = curent[1];
        let subComponentName = curent[2];

        if (!total.has(systemName)) {
            total.set(systemName, new Map)
        }
        if (!total.get(systemName).has(componentName)) {
            total.get(systemName).set(componentName, 0)
        }

    }

}
a([]);