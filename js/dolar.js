let valorDolar = 0;

async function obtenerDolar() {

    try {

        const respuesta = await fetch(
            "https://api.bluelytics.com.ar/v2/latest"
        );

        const data = await respuesta.json();

        valorDolar = data.blue.value_sell;

        document.getElementById("dolar").innerHTML = `
            <h2>Dólar Blue</h2>
            <p>Compra: $${data.blue.value_buy}</p>
            <p>Venta: $${data.blue.value_sell}</p>
        `;

    } catch (error) {

        document.getElementById("dolar").innerHTML =
            "<p>Error al obtener cotización.</p>";

    }

}
