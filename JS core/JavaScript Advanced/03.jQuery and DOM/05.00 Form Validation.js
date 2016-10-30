function solve(){
    let isCompany = false;
    setEventHandlers();

    function setEventHandlers() {
        $("#registerForm").submit(function(e) {
            e.preventDefault();
            ValidateData();
        });

        $("#company").on("change", function () {
            if ($("#company").is(":checked")){
                $("#companyInfo").show();
                isCompany = true;
            }
            else{
                $("#companyInfo").hide();
                isCompany = false;
            }
        });
    }

    function ValidateData() {
        let formIsValid = true;

        let username = $('#username').val();
        if (!username.match(/^[a-zA-Z0-9]{3,20}$/)){
            $('#username').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            $('#username').css('border', 'none');
        }

        let email = $('#email').val();
        if (!email.match(/^.*@.*\..*$/)){
            $('#email').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            $('#email').css('border', 'none');
        }

        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();

        console.log(password);
        console.log(confirmPassword);

        if (!password.match(/^[\w]{5,15}$/)){
            $('#password').css('border-color', 'red');
            $('#confirm-password').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            if (!confirmPassword.match(/^[\w]{5,15}$/) ||
                password != confirmPassword){
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                formIsValid = false;
            }
            else{

                $('#password').css('border', 'none');
                $('#confirm-password').css('border', 'none');
            }
        }

        if (isCompany){
            let companyNumber = $("#companyNumber").val();
            if (!companyNumber.match(/^[1-9][0-9]{3}$/)){
                $("#companyNumber").css('border-color', 'red');
                formIsValid = false;
            }
            else{
                $("#companyNumber").css('border', 'none');
            }
        }

        console.log(formIsValid);
        if (formIsValid){
            $('#valid').show();
        }
    }
}