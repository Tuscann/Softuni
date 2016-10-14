function daggersSolution(blades) {
    let allBlades = [];
    for (let blade of blades) {
        blade = Math.floor(blade);
        let bladeType = blade > 40 ? 'sword' : 'dagger';
        let bladeApplication = '';
        switch ((blade - 1) % 5) {
            case 0:
                bladeApplication = 'blade';
                break;
            case 1:
                bladeApplication = 'quite a blade';
                break;
            case 2:
                bladeApplication = 'pants-scraper';
                break;
            case 3:
                bladeApplication = 'frog-butcher';
                break;
            default: // 4
                bladeApplication = '*rap-poker';
                break;
        }
        if (blade > 10) {
            allBlades.push({length: blade, type: bladeType, application: bladeApplication});
        }
    }

    let html = '<table border="1">\n';
    html += '<thead>\n';
    html += '<tr><th colspan="3">Blades</th></tr>\n';
    html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n';
    html +=    '</thead>\n';
    html +=    '<tbody>\n';
    for (let item of allBlades) {
        html += `<tr><td>${item.length}</td><td>${item.type}</td><td>${item.application}</td></tr>\n`;
    }
    html +=    '</tbody>\n';
    html +=    '</table>';
    console.log(html);
}
daggersSolution(["17.8", "19.4", "13", "55.8", "126.96541651", "3"]);
// daggersSolution([1,2,3,4,5,6,7,8,9,10]);