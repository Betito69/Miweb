document.addEventListener("DOMContentLoaded", () => {

    fetch("../data/casos.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor");
            contenedor.innerHTML = "";

            const casos = data.items; 

            data.forEach(caso => {
                const card = `
                    <div class="card">
                        <img src="${caso.imagen}" alt="${caso.nombre}">
                        <h2>${caso.nombre}</h2>
                        <p>${caso.descripcion}</p>
                    </div>
                `;
                contenedor.innerHTML += card;
            });
        })
        .catch(error => console.log("Error al cargar JSON:", error));
});
