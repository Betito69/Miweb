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
                        <h3>${caso.titulo}</h3>
                        <p class="descrip">${caso.descripcion}</p>
                        <div class="img-box">
                            <img src="${caso.imagen}" alt="${caso.titulo}">
                        </div>
                    </a>
                `;
                contenedor.innerHTML += card;
            });
        })
        .catch(error => console.log("Error al cargar JSON:", error));
});
