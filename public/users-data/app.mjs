const PASSWORD = ""
const baseUrl = "https://muhammadmehdi09.github.io/Social_Media_App/"
let users = []

const fetchUsers = async () => {
    const res = await fetch(`${baseUrl}/users`, {
        method: "GET",
    })
    const json = await res.json()
    const users = json.data
    console.log(users)
    userDisplayer(users)
}
fetchUsers()

const userDisplayer = (users) => {
    console.log(users)
    document.body.innerHTML = ""
    for (const user of users) {
        document.body.innerHTML += `<div class="bg-blue-300 text-white text-md text-semibold m-10 w-72 p-4 mx-auto rounded-xl">
  <div>${user.name}</div>
  <div>${user.email}</div>
  <div>${user.password}</div>
  <div class="-mb-6 mt-4">
    <button class="bg-green-500 rounded-xl px-8 py-3 mx-auto" id="${user._id}" onclick="editUser(this.id)">Edit</button>
    <button class="bg-green-500 rounded-xl px-8 py-3 mx-auto" id="${user._id}" onclick="deleteUser(this.id)">Delete User</button>
  </div>
    <br>
</div>`
    }
}

async function deleteUser(id) {
    const res = await fetch(`${baseUrl}/users`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const json = await res.json()
    const users = json.data
    console.log(users)
    userDisplayer(users)
}

async function editUser(id) {
    let name = prompt("Enter the new name")
    let email = prompt("Enter the new email")
    let password = prompt("Enter the new password")
    const res = await fetch(`${baseUrl}/users`, {
        method: "PUT",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            id: id,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const json = await res.json()
    const users = json.data
    console.log(users)
    userDisplayer(users)
}