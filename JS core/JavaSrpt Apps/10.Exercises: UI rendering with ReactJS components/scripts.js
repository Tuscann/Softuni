var button = document.getElementById("button");
var rainbow = ["red",'black',"orange","yellow","green","blue","indigo","violet"];
function change() {
    document.body.style.background = rainbow[Math.floor(rainbow.length*Math.
random())];
}
button.addEventListener("click", change);

Promise.resolve( change).then(alert('Iskam pari'));


