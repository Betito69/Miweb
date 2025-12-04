document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch("../data/casos.json")
        .then(res => res.json())
        .then(data => {
            const asesino = data.items.find(item => item.id === id);

            if (!asesino) {
                document.getElementById("titulo-asesino").textContent = "Caso no encontrado";
                return;
            }

            document.getElementById("titulo-asesino").textContent = asesino.titulo;
            document.getElementById("imagen").src = asesino.imagen;

            document.getElementById("descripcion").textContent = asesino.descripcion || "";
            document.getElementById("biografia").textContent = asesino.biografia || "";
            document.getElementById("victimas").textContent = asesino.victimas || "";
            document.getElementById("modus_operandi").textContent = asesino.modus_operandi || "";
            document.getElementById("datos_interes").textContent = asesino.datos_interes || "";
        })
        .catch(err => console.log("Error al cargar datos:", err));
});
