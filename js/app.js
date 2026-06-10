document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    inicializarNoticias();
    mostrarNoticias();
    obtenerDolar();
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
