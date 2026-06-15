const noticiasIniciales = [
{
    titulo: "Argentina Campeón del Mundo",
    descripcion: "La selección argentina ganó el Mundial de Qatar 2022 ante Francia en los penales.",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop"
},
{
    titulo: "La inteligencia artificial revoluciona el mercado",
    descripcion: "ChatGPT y otras herramientas de IA están transformando la forma en que trabajamos.",
    imagen: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop"
},
{
    titulo: "El dólar blue sigue en alza",
    descripcion: "La cotización del dólar informal superó nuevos máximos en el mercado argentino.",
    imagen: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=250&fit=crop"
},
{
    titulo: "River y Boca definen el Superclásico",
    descripcion: "El clásico más esperado del fútbol argentino se jugará este fin de semana en el Monumental.",
    imagen: "https://images.unsplash.com/photo-1551958219-acbc630e2914?w=400&h=250&fit=crop"
},
{
    titulo: "El Congreso debate la nueva ley de educación",
    descripcion: "Diputados y senadores discuten los puntos clave de la reforma educativa propuesta.",
    imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop"
},
{
    titulo: "Conflicto en Medio Oriente: últimas noticias",
    descripcion: "La situación internacional se agrava mientras la comunidad mundial busca una salida diplomática.",
    imagen: "https://media.linkedin.com/dms/image/v2/D4D12AQEClLndsx8ByQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681884440724?e=2147483647&v=beta&t=rAk4y2hkOhAbsKCVn8l0BheqFY635EOJOCFxAXRF5aM"
}
];

function inicializarNoticias(){

    if(!localStorage.getItem("noticias")){
        localStorage.setItem(
            "noticias",
            JSON.stringify(noticiasIniciales)
        );
    }

}

function obtenerNoticias(){
    return JSON.parse(
        localStorage.getItem("noticias")
    );
}

function guardarNoticias(noticias){
    localStorage.setItem(
        "noticias",
        JSON.stringify(noticias)
    );
}
