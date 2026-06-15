const noticiasIniciales = [
{
titulo:"Argentina Campeón",
descripcion:"La selección ganó otra copa.",
imagen:"https://picsum.photos/300/200?1"
},
{
titulo:"Tecnología",
descripcion:"Nueva IA revoluciona el mercado.",
imagen:"https://picsum.photos/300/200?2"
},
{
titulo:"Economía",
descripcion:"Sube el dólar blue.",
imagen:"https://picsum.photos/300/200?3"
},
{
titulo:"Deportes",
descripcion:"Resultados de la fecha.",
imagen:"https://picsum.photos/300/200?4"
},
{
titulo:"Política",
descripcion:"Debate en el Congreso.",
imagen:"https://picsum.photos/300/200?5"
},
{
titulo:"Internacional",
descripcion:"Noticias del mundo.",
imagen:"https://picsum.photos/300/200?6"
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