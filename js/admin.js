if (!sessionStorage.getItem("admin")) {
    window.location.href = "login.html";
}

document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {
        sessionStorage.removeItem("admin");
        window.location.href = "index.html";
    });
