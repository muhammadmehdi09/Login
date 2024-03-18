let container = document.getElementById("container")
let password = document.getElementById("password")
let email = document.getElementById("email")
let name = document.getElementById("name")
const baseUrl = "https://muhammadmehdi09.github.io/Social_Media_App/"

const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "GET",
  })
  const json = await res.json()
  const users = json.data
  sendUser(users)
}

const sendUser = async (users) => {

  if (users.some((user) => user.email === email.value)) {
    alert("Sorry Email is already registered")
  } else if (users.some((user) => user.name === name.value)) {
    alert("Sorry name is already in use")
  } else if (name.value.length < 3) {
    alert("name must have at least 3 charachters")
  } else if (password.value.length < 5) {
    alert("Password must have at least 5 charachters")
  } else {
    const body = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    const res = await fetch(`${baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
    })


      const notif = `<div class="bg-black text-white m-4 p-8 rounded-[5px]">Welcome ${name.value}</div>`
      container.innerHTML += notif
      setTimeout(() => { container.innerHTML = "" }, 3000)
  }
}