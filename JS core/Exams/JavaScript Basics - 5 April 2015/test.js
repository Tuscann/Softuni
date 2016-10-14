function dump_props(obj, obj_name) {
    var result = "";
    for (var i in obj) {
        result += obj_name + "." + i + " = " + obj[i] + "<br>";
    }
    result += "<hr>";
    return result;
}
console.log(dump_props(['dsfsdf','fsdfs']));