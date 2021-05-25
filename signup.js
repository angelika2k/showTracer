function username() {
    var user = document.getElementById('usrn');
    var letters = /^[a-zA-Z]+$/;
console.log(user.length);

    if (user.value.length < 5) {
        document.getElementById('userNameError').innerHTML = 'cant smaller than 5';
    } else {
        document.getElementById('userNameError').innerHTML = '';
    }
    if (user.value.match(letters)) {

    } else {
        document.getElementById('userNameError').innerHTML = 'alphabet only';
    }
    if (user.value.trim() == "") {
        document.getElementById('userNameError').innerHTML = "Username is required";
    }

}




function email() {
    var user = document.getElementById('usre');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (user.value.match(mailformat)) {
        document.getElementById('usermail').innerHTML = '';
    } else {
        document.getElementById('usermail').innerHTML = 'Your email address is invalid';
    }
    if (user.value.trim() == "") {
        document.getElementById('usermail').innerHTML = "Email is required";
    }
}


function vpassword() {

    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var special = /[!@#\$%\^&]/g;
    var numbers = /[0-9]/g;


    var user = document.getElementById('usrp');


    if (user.value.length == 8) {
        document.getElementById('userpassword').innerHTML = '';
    } else {
        document.getElementById('userpassword').innerHTML = 'Password length should be 8';
    }

    if (user.value.match(upperCaseLetters)) {

    } else {
        document.getElementById('userpassword').innerHTML = 'Add atleast one uppercase letter';
    }

    if (user.value.match(numbers)) {

    } else {
        document.getElementById('userpassword').innerHTML = 'Add atleast one number';
    }

    if (user.value.match(lowerCaseLetters)) {

    } else {
        document.getElementById('userpassword').innerHTML = 'Add atleast one lowercase letter';
    }

    if (user.value.match(special)) {

    } else {
        document.getElementById('userpassword').innerHTML = 'Add atleast one special character';
    }
    if (user.value.trim() == "") {
        document.getElementById('userpassword').innerHTML = "Password is required";
    }

}


var user = []



function saveFile() {

    // Get the data from each element on the form.
    var name = document.getElementById('usrn').value;
    var email = document.getElementById('usre').value;
    var password = document.getElementById('usrp').value;

    var userObj={
        "name":name,
        "email":email,
        "password":password
    }

    user.push(userObj)
    
    console.log(user);

}