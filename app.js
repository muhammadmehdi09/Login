let email = document.getElementById("email");
let password = document.getElementById("password");
let username = document.getElementById("username");
let login_username = document.getElementById("login_username");
let login_password = document.getElementById("login_password");
let msg = document.getElementById("login_password");
let users = [];

const signup = () => {
    if (users.some((user) => user.email === email.value)) {
        alert("Sorry Email is already registered");
    }

    else if (users.some((user) => user.username === username.value)) {
        alert("Sorry username is already in use");
    } 
    
    else if (username.value.length < 3) {
        alert("Username must have at least 3 charachters");
    }

    else if (password.value.length < 5) {
        alert("Password must have at least 5 charachters");
    }

    else {
        let user = {
            username: username.value,
            email: email.value,
            password: password.value,
        };
        users.push(user);
        alert(`Hello ${user.username}`);
    }
};

const login = () => {
    if (users.some((user) => user.username === login_username.value)) {
        if (users.some((user) => user.password === login_password.value)) {
            alert(`Hello ${login_username.value}`);
        }

        else {
            alert("Sorry password is wrong");
        }
    }

    else {
        alert("Sorry username is not registered");
    }
};