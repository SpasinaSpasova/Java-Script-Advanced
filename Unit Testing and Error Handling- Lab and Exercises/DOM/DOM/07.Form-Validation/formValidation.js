function validate() {
    document.querySelector("#submit").type = "button";

    let submitButtonElement = document.getElementById('submit');
    let checkBoxElement = document.getElementById('company');

    submitButtonElement.addEventListener('click', clickSubmit);
    checkBoxElement.addEventListener('change', chechBoxChange);

    function clickSubmit() {

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;
        let email = document.getElementById('email').value;
        let companyNumber = document.getElementById('companyNumber').value;

        document.getElementById('valid').style.display = 'block';

        //username validations
        let regexUsername = /^[0-9a-zA-Z]{3,20}$/;
        if (!regexUsername.test(username)) {
            document.getElementById('username').style.borderColor = "red";
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('username').style.borderColor = '';
        }


        
        //validate passwords
        const regexPassword = /^[0-9a-zA-Z_]{5,15}$/;
        //validation first pass
        if (!regexPassword.test(password)) {
            document.getElementById('password').style.borderColor = "red";
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('password').style.borderColor = '';
        }
        //validation second
        if (!regexPassword.test(confirmPassword)) {
            document.getElementById('confirm-password').style.borderColor = "red";
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('confirm-password').style.borderColor = '';
        }
        //validation if match
        if (password !== confirmPassword) {
            document.getElementById('password').style.borderColor = "red";
            document.getElementById('confirm-password').style.borderColor = "red";
            document.getElementById('valid').style.display = 'none';
            console.log('DONT MATCH');
        }



        //validate email
        const regexEmail = /^[^@.]+@[^@]*\.[^@]*$/;
        if (!regexEmail.test(email)) {
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('email').style.borderColor = '';
        }



        //validate company number
        if (checkBoxElement.checked == true) {
            if (Number.isInteger(Number(companyNumber)) && Number(companyNumber) >= 1000 && Number(companyNumber) <= 9999) {
                document.getElementById('companyNumber').style.borderColor = '';
            
            } else {
                document.getElementById('companyNumber').style.borderColor = "red";
                document.getElementById('valid').style.display = 'none';
            }
        }
    }

    function chechBoxChange(event) {
        if (event.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    }
}