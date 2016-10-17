function task15(input){
    console.log("<ul>");
    for(let i of input){
        let text = "  <li>";
        let sen = i.replace(`//(s*|d)<(s*|d)//`, "&lt");
        sen = i.replace(`//(s*|d)>(s*|d)//`, "&gt;");
        sen = i.replace("&", "&amp");
        sen = i.replace("\"", "&quot");
        text += sen;
        text += "</li>";
        console.log(text);
    }
    console.log("</ul>");
}