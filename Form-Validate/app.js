function checkForm(){
    // defining all the variables and retrieving id
    var form = document.getElementById('form');
    var small = document.getElementById("error");
    var small2 = document.getElementById("error2");
    var small3 = document.getElementById("error3");
    var small4 = document.getElementById("error4");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confPass = document.getElementById("confPass");

    // if else for name input
    (name.value === "") || (name.value.length < 3) ? small.classList.remove("errorMessage") : name.classList.add("correct");
    name.classList.contains("correct") ? small.classList.add("errorMessage") : null;

    //if else for email
    (email.value.length < 11) ? small2.classList.remove("errorMessage") : email.classList.add("correct");
    email.classList.contains("correct") ? small2.classList.add("errorMessage") : null;
   
    //if else for password
    (password.value.length < 6) ? small3.classList.remove("errorMessage") : password.classList.add("correct");
    password.classList.contains("correct") ? small3.classList.add("errorMessage") : null;

    //if else for confirm password
    (confPass.value !== password.value) ? small4.classList.remove("errorMessage") : confPass.classList.add("correct");
    confPass.classList.contains("correct") ? small4.classList.add("errorMessage") : null;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkForm();
});