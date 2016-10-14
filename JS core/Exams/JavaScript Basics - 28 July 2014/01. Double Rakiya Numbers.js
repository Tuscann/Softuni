function a(input) {


    let start = Number(input[0]);
    let end = Number(input[1]);

    let str = '<ul>';

    for (let i = start; i < end; i++) {

        str+='<li><span class=\''+'\n';

    }


    console.log(str);
}
a(['5', '8']);
a(['11210', '11215']);
a(['55555', '55560']);