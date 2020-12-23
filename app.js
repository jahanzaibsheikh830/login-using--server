function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var password = document.getElementById('password').value;

    user = ({ userName: name, userEmail: email, userPassword: password })

    console.log(user)

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        document.getElementById('res').innerHTML = Http.responseText;
    }

    return false
}

function login() {
    var uEmail = document.getElementById('uEmail').value
    var uPassword = document.getElementById('uPassword').value
    var result = document.getElementById('result')

    console.log(uPassword)
    console.log(uEmail)
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: uEmail, pass: uPassword }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        document.getElementById('result').innerHTML = Http.responseText;
    }
    return false;
}
