document
    .getElementById("loginForm")
    .addEventListener("submit", login);

async function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const respuesta = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const data = await respuesta.json();
    console.log(data);
}
