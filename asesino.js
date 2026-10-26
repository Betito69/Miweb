document.addEventListener("DOMContentLoaded", () => {
    function mostrarBiografia(contenedor, biografia) { 
        contenedor.replaceChildren(); 

        if(!biografia){
            return;
        }

        if(typeof biografia === "string"){
            const parrafo = document.createElement("p");
            parrafo.textContent = biografia; 
            contenedor.appendChild(parrafo);
            return; 
        }

        if(Array.isArray(biografia)){
            biografia.forEach(capitulo => {
                const bloque = document.createElement("section"); 

                if(capitulo.titulo){
                    const titulo = document.createElement("h3"); 
                    titulo.textContent = capitulo.titulo; 
                    bloque.appendChild(titulo); 
                }

                const parrafos = Array.isArray(capitulo.contenido)
                    ? capitulo.contenido
                    : [capitulo.contenido];

                parrafos.forEach(texto => {
                    if(typeof texto === "string" && texto.trim()){
                        const parrafo = document.createElement("p"); 
                        parrafo.textContent = texto; 
                        bloque.appendChild(parrafo);
                    }
                });

                contenedor.appendChild(bloque);
            });
        }
    }

    function actualizarVisibilidadSeccion(idSeccion, idContenido){
        const seccion = document.getElementById(idSeccion); 
        const contenido = document.getElementById(idContenido);

        if(seccion && contenido) {
            seccion.hidden = contenido.textContent.trim() === "";
        }
    }

    function mostrarVictimas(contenedor, victimas) {

        contenedor.replaceChildren();

        if (!victimas) {
            return;
        }

        if (typeof victimas === "string") {
            const parrafo = document.createElement("p");
            parrafo.textContent = victimas;
            contenedor.appendChild(parrafo);
            return;
        }

        if (typeof victimas === "object" && !Array.isArray(victimas)) {

            if (victimas.resumen) {
                const resumen = document.createElement("p");
                resumen.textContent = victimas.resumen;
                contenedor.appendChild(resumen);
            }

            if (Array.isArray(victimas.lista)) {

                victimas.lista.forEach(victima => {

                    const tarjeta = document.createElement("article");
                    tarjeta.classList.add("tarjeta-victima");

                    const contenido = document.createElement("div"); 
                    contenido.classList.add("contenido-victima");

                    const titulo = document.createElement("h3");

                    if(victima.imagen){
                        const imagen = document.createElement("img");
                        imagen.src = victima.imagen;
                        imagen.alt = "Fotografía de " + (victima.nombre || "víctima");
                        imagen.classList.add("imagen-victima");
                        tarjeta.appendChild(imagen);
                    }

                    titulo.textContent = victima.nombre || "Identidad no especificada";
                    contenido.appendChild(titulo);

                    if (victima.fecha) {
                        const fecha = document.createElement("p");
                        fecha.textContent = "Fecha: " + victima.fecha;
                        contenido.appendChild(fecha);
                    }

                    if (victima.estado) {
                        const estado = document.createElement("p");
                        estado.textContent = "Estado: " + victima.estado;
                        contenido.appendChild(estado);
                    }

                    if (victima.descripcion) {
                        const descripcion = document.createElement("p");
                        descripcion.textContent = victima.descripcion;
                        contenido.appendChild(descripcion);
                    }

                    tarjeta.appendChild(contenido);
                    contenedor.appendChild(tarjeta);
                });
            }
        }
    }

    
function mostrarCronologia(contenedor, cronologia) {
    contenedor.replaceChildren();

    if (!Array.isArray(cronologia) || cronologia.length === 0) {
        return;
    }

    cronologia.forEach(evento => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("evento-cronologia");

        const titulo = document.createElement("h3");
        titulo.textContent = evento.titulo || "Acontecimiento";
        tarjeta.appendChild(titulo);

        if (evento.fecha) {
            const fecha = document.createElement("p");
            fecha.textContent = evento.fecha;
            tarjeta.appendChild(fecha);
        }

        if (evento.descripcion) {
            const descripcion = document.createElement("p");
            descripcion.textContent = evento.descripcion;
            tarjeta.appendChild(descripcion);
        }

        contenedor.appendChild(tarjeta);
    });
}


function mostrarPerfilPsicologico(contenedor, perfil) {
    contenedor.replaceChildren();

    if (!perfil) return;

    if (typeof perfil === "string") {
        contenedor.textContent = perfil;
        return;
    }

    if (perfil.resumen) {
        const resumen = document.createElement("p");
        resumen.textContent = perfil.resumen;
        contenedor.appendChild(resumen);
    }

    if (Array.isArray(perfil.subapartados)) {
        perfil.subapartados.forEach(apartado => {
            const bloque = document.createElement("section");

            if (apartado.titulo) {
                const titulo = document.createElement("h3");
                titulo.textContent = apartado.titulo;
                bloque.appendChild(titulo);
            }

            const parrafos = Array.isArray(apartado.contenido)
                ? apartado.contenido
                : [apartado.contenido];

            parrafos.forEach(texto => {
                if (typeof texto === "string" && texto.trim()) {
                    const parrafo = document.createElement("p");
                    parrafo.textContent = texto;
                    bloque.appendChild(parrafo);
                }
            });

            if (bloque.textContent.trim()) {
                contenedor.appendChild(bloque);
            }
        });
    }
}

function mostrarDatosInteres(contenedor, datos) {
    contenedor.replaceChildren();

    if (!datos) return;

    if (typeof datos === "string") {
        if (datos.trim()) {
            const parrafo = document.createElement("p");
            parrafo.textContent = datos;
            contenedor.appendChild(parrafo);
        }
        return;
    }

    if (Array.isArray(datos) && datos.length > 0) {
        const lista = document.createElement("ul");

        datos.forEach(dato => {
            if (typeof dato === "string" && dato.trim()) {
                const elemento = document.createElement("li");
                elemento.textContent = dato;
                lista.appendChild(elemento);
            }
        });

        if (lista.children.length > 0) {
            contenedor.appendChild(lista);
        }
    }
}

function mostrarFuentes(contenedor, fuentes) {
    contenedor.replaceChildren();

    if (!Array.isArray(fuentes) || fuentes.length === 0) {
        return;
    }

    const lista = document.createElement("ul");
    lista.classList.add("lista-fuentes");

    fuentes.forEach(fuente => {
        const elemento = document.createElement("li");
        elemento.classList.add("fuente");

        if (fuente.url) {
            const enlace = document.createElement("a");
            enlace.href = fuente.url;
            enlace.textContent = fuente.titulo || fuente.url;
            enlace.target = "_blank";
            enlace.rel = "noopener noreferrer";
            elemento.appendChild(enlace);
        } else {
            const titulo = document.createElement("span");
            titulo.textContent = fuente.titulo || "Fuente sin título";
            elemento.appendChild(titulo);
        }

        if (fuente.autor) {
            const autor = document.createElement("p");
            autor.textContent = "Autor: " + fuente.autor;
            elemento.appendChild(autor);
        }

        if (fuente.fecha) {
            const fecha = document.createElement("p");
            fecha.textContent = "Publicación: " + fuente.fecha;
            elemento.appendChild(fecha);
        }

        lista.appendChild(elemento);
    });

    contenedor.appendChild(lista);
}


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

            mostrarBiografia(document.getElementById("biografia"), asesino.biografia);

            mostrarVictimas(document.getElementById("victimas"), asesino.victimas);

            mostrarCronologia(document.getElementById("cronologia"), asesino.cronologia);
            
            mostrarPerfilPsicologico(document.getElementById("perfil_psicologico"), asesino.perfil_psicologico);

            mostrarDatosInteres(document.getElementById("datos_interes"), asesino.datos_interes);
            
            mostrarFuentes(document.getElementById("fuentes"), asesino.fuentes); 

            actualizarVisibilidadSeccion("seccion-descripcion", "descripcion");
            actualizarVisibilidadSeccion("seccion-biografia", "biografia");
            actualizarVisibilidadSeccion("seccion-victimas", "victimas");
            actualizarVisibilidadSeccion("seccion-cronologia", "cronologia");
            actualizarVisibilidadSeccion("seccion-perfil", "perfil_psicologico");
            actualizarVisibilidadSeccion("seccion-datos", "datos_interes");
            actualizarVisibilidadSeccion("seccion-fuentes", "fuentes");
        })
        .catch(err => console.log("Error al cargar datos:", err));
});
