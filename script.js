
let userId = 0;
let user = [];

function saveForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const conPass = document.getElementById("con-password").value;

    console.log(name);

    var error = document.getElementById("error");
    var success = document.getElementById("success");

    if (name == '' || email=='' || pass=='' || conPass=='') {
        error.innerHTML = "Error : All the fields are mandtory";
        setTimeout(() => {
            error.innerHTML = "";
        },3000);

        return;
    }

    userId++;
    user.push({
        ID: userId, name: name, email: email, pass: pass
    });

    // save user to Browser Local Storage
    localStorage.setItem("users", JSON.stringify(user));

    // clear all fields
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('con-password').value = "";

    if (name && email && pass && conPass) {
        success.innerHTML = "Successfully Signed Up!";
        setTimeout(() => {
            success.innerHTML = "";
        }, 3000);
    }

    setTimeout(() => {
        showContent();
    },2000);
}

function showContent() {
    window.location.href = "Logout/logout.html";

    var keys = Object.keys(user);

    let name = document.getElementById('showName');
    let email = document.getElementById('showEmail');
    let pass = document.getElementById('showPassword');

    keys.forEach((key) => {
        if (key == 'userId') {
            id.innerHTML = user[key];
        }
        else if (key == 'name') {
            document.getElementById('showName').value = user[key];
        }
        else if (key == 'email') {
            email.innerHTML = user[key];
        }
        else {
            pass.innerHtml = user[key];
        }
    })

    console.log(user[name]);
}

// Store Item to LocalStorage of Browser 
window.onbeforeunload = () => {
    localStorage.setItem('students', JSON.stringify(user));
};