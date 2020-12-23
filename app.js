function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var password = document.getElementById('password').value;

    user = ({ userName: name, userEmail: email, userPassword: password })
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    const Http = new XMLHttpRequest();
    const url = 'https://login-system-jahan.herokuapp.com/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        // console.log(Http.responseText)
        document.getElementById('res').innerHTML = Http.responseText;
    }

    return false
}

function login() {
    var uEmail = document.getElementById('uEmail').value
    var uPassword = document.getElementById('uPassword').value

    const Http = new XMLHttpRequest();
    const url = 'https://login-system-jahan.herokuapp.com/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: uEmail, pass: uPassword }));
    document.getElementById('uEmail').value = ""
    document.getElementById('uPassword').value = ""
    Http.onreadystatechange = (e) => {
        // console.log(Http.responseText)
        document.getElementById('result').innerHTML = Http.responseText;
    }
    return false;
}
