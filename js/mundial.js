const MUNDIAL_LEAGUE_ID = 4429;

function horaArgentina(strTimestamp) {

    const fechaUtc = new Date(strTimestamp + "Z");

    return fechaUtc.toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

}

async function obtenerResultadosMundial() {

    const contenedor = document.getElementById("resultadosMundial");

    try {

        const respuesta = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=${MUNDIAL_LEAGUE_ID}`
        );

        const data = await respuesta.json();
        const partidos = (data.events || []).slice(-6).reverse();

        contenedor.innerHTML = "";

        partidos.forEach(partido => {
            contenedor.innerHTML += `
            <div class="partido">
                <h4>${partido.strHomeTeam} ${partido.intHomeScore} - ${partido.intAwayScore} ${partido.strAwayTeam}</h4>
                <p>${partido.dateEvent}</p>
            </div>
            `;
        });

    } catch (error) {

        contenedor.innerHTML = "<p>Error al obtener los resultados.</p>";

    }

}

async function obtenerProximosPartidosMundial() {

    const contenedor = document.getElementById("proximosMundial");

    try {

        const respuesta = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=${MUNDIAL_LEAGUE_ID}`
        );

        const data = await respuesta.json();
        const partidos = data.events || [];

        contenedor.innerHTML = "";

        if (partidos.length === 0) {
            contenedor.innerHTML = "<p>No hay próximos partidos programados.</p>";
            return;
        }

        partidos.forEach(partido => {
            contenedor.innerHTML += `
            <div class="partido">
                <h4>${partido.strHomeTeam} vs ${partido.strAwayTeam}</h4>
                <p>${horaArgentina(partido.strTimestamp)}hs (hora Argentina)</p>
                <p>${partido.strVenue}</p>
            </div>
            `;
        });

    } catch (error) {

        contenedor.innerHTML = "<p>Error al obtener los próximos partidos.</p>";

    }

}
