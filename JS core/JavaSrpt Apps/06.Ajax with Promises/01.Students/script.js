function inside() {

    let url = 'https://baas.kinvey.com/appdata/';
    let appKey = "kid_BJXTsSi-e";
    let appSecret = "447b8e7046f048039d95610c1b039390";

    let postUrl = url + appKey + '/students';
    let auth = {
        'Authorization': 'Basic ' + btoa('guest:guest'),
        "Content-Type": "application/json"
    };


    let table = $('#results');

    function loadStudents() {
        let tr = table.find("tr:not(:first-child)");
        tr.remove();

        $.get({
            url: postUrl,
            headers: auth
        })
            .then((students)=> {
                    students = students.sort((a, b)=> {
                        return a.ID - b.ID;
                    });

                    for (let student of students) {
                        let row = $('<tr>');
                        let id = $('<td>').text(student.ID);
                        let firstname = $('<td>').text(student.FirstName);
                        let lastName = $('<td>').text(student.LastName);
                        let facultyNumber = $('<td>').text(student.FacultyNumber);
                        let grade = $('<td>').text(student.Grade);
                        row.append(id).append(firstname).append(lastName).append(facultyNumber).append(grade);
                        table.append(row);
                    }
                }
            );
    }
    loadStudents();


    $('#addBtn').click(()=> {
        let idInput = $('#studentID');
        let firstName = $('#firstName');
        let lastName = $('#lastName');
        let faciltyNumber = $('#facultyNumber');
        let gradeInput = $('#grade');

        let id = Number(idInput.val());
        let grade = Number(gradeInput.val());
        let facyltyregex = /^\d+$/g;

        if (idInput.val() != "" &&
            firstName.val() != "" &&
            lastName.val() != "" &&
            facyltyregex.test(faciltyNumber.val()) &&
            gradeInput.val() != "") {
            let student = {
                ID: id,
                FirstName: firstName.val(),
                LastName: lastName.val(),
                FacultyNumber: faciltyNumber.val(),
                Grade: grade

            };
            $.ajax({
                url: postUrl,
                method: "Post",
                headers: auth,
                data: JSON.stringify(student)
            }).then(loadStudents)

        }
        idInput.val('');
        firstName.val('');
        lastName.val('');
        faciltyNumber.val('');
        gradeInput.val('');

    })
}