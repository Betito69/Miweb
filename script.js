fetch("../data/casos.json")
    .then(r => r.json)
    .then(data => {
        const contenedor = document.getElementById("contenedor");
        const asesinos = data.items. filter(item => item.tipo === "asesino"); 

       asesinos.forEach(asesino => {
      contenedor.innerHTML += `
        <article class="asesino">
            <a href="${asesino.link}">
                <h2>${asesino.titulo}</h2>
                <p>${asesino.descripcion}</p>
                <img src="${asesino.imagen}" alt="${asesino.titulo}">
                <p>¡Conoce su historia aquí!</p>
            </a>
        </article>
      `;
    });
})
.catch(err => console.error("Error cargando JSON:", err)); 