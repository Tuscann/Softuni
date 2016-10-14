function angularParser(data) {
    let apps = new Map;
    let orphanApps = new Map;
    let regEx = /^\$(app|controller|model|view)='([^']+)'(?:&app='([^']+)')?$/;

    for (let line of data) {
        let match = line.match(regEx);
        if (match !== null) {
            let [type, name, appName] = [match[1], match[2], match[3]];

            if (appName === undefined) {
                // Add new app
                apps.set(name, {controllers: [], models: [], views: []});
                if (orphanApps.has(name)) {
                    // transfer data from non-existent app log
                    apps.get(name)['controllers'] = apps.get(name)['controllers'].concat(orphanApps.get(name)['controllers']);
                    apps.get(name)['models'] = apps.get(name)['models'].concat(orphanApps.get(name)['models']);
                    apps.get(name)['views'] = apps.get(name)['views'].concat(orphanApps.get(name)['views']);
                }
            } else {
                // add model, view , controller to app
                if (!apps.has(appName)) {
                    // non-existing app
                    if (!orphanApps.has(appName))
                        orphanApps.set(appName, {controllers: [], models: [], views: []});
                    orphanApps.get(appName)[type + 's'].push(name);
                } else {
                    // existing app
                    apps.get(appName)[type + 's'].push(name);
                }
            }
        }
    }

    let result = {};

    function sortApps(appA, appB, allApps) {
        let appAControllersCount = allApps.get(appA).controllers.length;
        let appBControllersCount = allApps.get(appB).controllers.length;
        if (appAControllersCount == appBControllersCount) {
            let appAModelsCount = allApps.get(appA).models.length;
            let appBModelsCount = allApps.get(appB).models.length;

            return appAModelsCount - appBModelsCount;
        }

        return appBControllersCount - appAControllersCount;
    }

    let sortedApps = [...apps.keys()].sort((a1, a2) => sortApps(a1, a2, apps));
    for (let app of sortedApps) {
        result[app] = {controllers: [], models: [], views: []};
        result[app].controllers = apps.get(app).controllers.sort((a, b) => a.localeCompare(b));
        result[app].models = apps.get(app).models.sort((a, b) => a.localeCompare(b));
        result[app].views = apps.get(app).views.sort((a, b) => a.localeCompare(b));
    }

    console.log(JSON.stringify(result));
}

angularParser(["ko", "$controller='PHPController'&app='Language Parser'", "$controller='JavaController'&app='Language Parser'", "$controller='C#Controller'&app='Language Parser'", "$controller='C++Controller'&app='Language Parser'", "$app='Garbage Collector'", "$controller='GarbageController'&app='Garbage Collector'", "$controller='SpamController'&app='Garbage Collector'", "$app='Language Parser'"]);
// angularParser(["$app='MyApp'","$controller='My Controller'&app='MyApp'","$model='My Model'&app='MyApp'","$view='My View'&app='MyApp'"]);