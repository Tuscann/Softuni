function inside() {

    $(document).ready(function () {


        let url = 'https://baas.kinvey.com/appdata/';
        let appKey = "kid_BJXTsSi-e";
        let appSecret = "447b8e7046f048039d95610c1b039390";

        let postUrl = url + appKey + '/students';
        let auth = {'Authorization': 'Basic ' + btoa('guest:guest')};

        $.get({url:postUrl,headers:auth}).then(displayStudents);


        function displayStudents(input) {
            for(let student of input){
                $('tr').append($('<th>').text(student._id).val(student.ID));
            }
        }
    })




}