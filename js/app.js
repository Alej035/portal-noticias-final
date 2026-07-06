document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    inicializarNoticias();
    mostrarNoticias();
    obtenerDolar();
    obtenerResultadosMundial();
    obtenerProximosPartidosMundial();
    cargarTema();
}

function mostrarNoticias() {

    const contenedor = document.getElementById("noticias");
    const noticias = obtenerNoticias();

    contenedor.innerHTML = "";

    noticias.forEach(noticia => {
        contenedor.innerHTML += `
        <div class="card">
            <img src="${noticia.imagen}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
        </div>
        `;
    });

}

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) themeBtn.addEventListener("click", cambiarTema);

function cambiarTema() {
    document.body.classList.toggle("dark");
    const tema = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", tema);
}

function cargarTema() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
}
