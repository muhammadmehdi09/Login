let email = document.getElementById('email')
let password = document.getElementById('password')
let username = document.getElementById('username')
let login_email = document.getElementById('login_email')
let login_password = document.getElementById('password_email')
let login_div = document.getElementById('')
let users = []

const signup = () => {
        let user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
    
        users.push(user)
        console.log(users)
}

const login = () => {
     if(users.some(user => user.email === login_email.value)){
        if(users.some(user => user.password === login_password.value)){
            document.write("Hello")
        }
     }
}