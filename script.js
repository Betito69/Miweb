document.addEventListener("DOMContentLoaded", () => {

    fetch("../data/casos.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor");
            contenedor.innerHTML = "";

            const casos = data.items; 

            casos.forEach(caso => {
                const card = `
                    <a class="asesino" href="${caso.link}">
                        <div class="img-box">
                            <img src="${caso.imagen}" alt="${caso.titulo}">
                        </div>
                        <h2>${caso.titulo}</h2>
                        <p>${caso.descripcion}</p>
                    </a>
                `;
                contenedor.innerHTML += card;
            });
        })
        .catch(error => console.log("Error al cargar JSON:", error));
});
