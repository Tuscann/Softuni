function scoreToHTMLTable([input]) {
    let html = "<table>\n";

    let arr = JSON.parse(input);

    html+='   <tr>';

    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`

    html += "</tr>\n";

    for(let obj of arr){
        console.log(obj);

    }
    return html+"<table>";


    function htmlEscape(key) {


        let replaced=key;

        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');

        return replaced;
    }
}

// console.log(scoreToHTMLTable(['[{"X":5,"Y":7},{"X":2,"Y":4}]']));
console.log(scoreToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));
// console.log(scoreToHTMLTable(['[{"name":"Pesho & Pepa","score":70}]']));