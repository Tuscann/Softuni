function generateComponentCatalogue(data) {
    let catalogue = new Map;
    for (let line of data) {
        let [system, component, subComponent] = line.split(/\s\|\s/);
        if (!catalogue.has(system)) {
            catalogue.set(system, new Map);
        }

        if (!catalogue.get(system).has(component)) {
            catalogue.get(system).set(component, [])
        }
        catalogue.get(system).get(component).push(subComponent);
    }
    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let systems = [...catalogue.keys()].sort((a, b) => sortSystemComparator(a, b, catalogue));
    for (let system of systems) {
        console.log(system);
        let components = [...catalogue.get(system).keys()].sort((s1, s2) => catalogue.get(system).get(s2).length - catalogue.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

generateComponentCatalogue(["SULS | Main Site | Home Page", "SULS | Main Site | Login Page", "SULS | Main Site | Register Page", "SULS | Judge Site | Login Page", "SULS | Judge Site | Submittion Page", "Lambda | CoreA | A23", "SULS | Digital Site | Login Page", "Lambda | CoreB | B24", "Lambda | CoreA | A24", "Lambda | CoreA | A25", "Lambda | CoreC | C4", "Indice | Session | Default Storage", "Indice | Session | Default Security"]);