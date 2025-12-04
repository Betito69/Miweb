document.addEventListener("DOMContentLoaded", () => {

    fetch("../data/casos.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor");
            contenedor.innerHTML = "";

            const casos = data.items; 

            casos.forEach(caso => {
                const card = `
                    <div class="card">
                        <img src="${caso.imagen}" alt="${caso.titulo}">
                        <h2>${caso.titulo}</h2>
                        <p>${caso.descripcion}</p>
                        <a href="${caso.link}">Ver mas</a>
                    </div>
                `;
                contenedor.innerHTML += card;
            });
        })
        .catch(error => console.log("Error al cargar JSON:", error));
});
