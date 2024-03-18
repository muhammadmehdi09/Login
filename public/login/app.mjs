let container = document.getElementById("container")
let name = document.getElementById("name");
let password = document.getElementById("password");
const baseUrl = "https://muhammadmehdi09.github.io/Social_Media_App/";

const fetchData = async () => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "GET",
  });
  const json = await res.json()
  const users = json.data;
  loginChecker(users);
};

const loginChecker = (users) => {
  if (users.some((user) => user.name === name.value)) {
    if (users.some((user) => user.password === password.value)) {
      const notif = `<div class="bg-black text-white m-4 p-8 rounded-[5px]">Welcome ${name.value}</div>`
      container.innerHTML += notif
      setTimeout(() => { container.innerHTML = "" }, 3000)
    } else {
      alert("Sorry password is wrong");
    }
  } else {
    alert("Sorry name is not registered");
  }
};