const grid = new Muuri(".grid", {
    layout: {
        rounding: false,
    },
});

window.addEventListener("load", () => {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("imagenes-cargadas");

    // Agregamos los listener de los enlaces para filtrar por categoria
    const enlaces = document.querySelectorAll("#categorias a");
    enlaces.forEach((el) => {
        el.addEventListener("click", (evento) => {
            evento.preventDefault();
            document.querySelector(".activo").classList.remove("activo");
            evento.target.classList.add("activo");

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === "todos" ?
                grid.filter("[data-categoria]") :
                grid.filter(`[data-categoria="${categoria}"]`);
        });
    });
    // Agregamos el listener paa la barra de busqueda
    document
        .querySelector("#barra-busqueda")
        .addEventListener("input", (evento) => {
            const busqueda = evento.target.value;
            grid.filter((item) => {
                return item.getElement().dataset.etiquetas.includes(busqueda);
            });
        });

    // Agregamos listener para las imagenes
    const overlay = document.getElementById("overlay");
    document.querySelectorAll(".grid .item img").forEach((elemento) => {
        elemento.addEventListener("click", () => {
            const ruta = elemento.getAttribute("src");
            // vamos al padre del padre
            const description = elemento.parentNode.parentNode.dataset.description;
            overlay.classList.add("activo");
            document.querySelector("#overlay img").src = ruta;
            document.querySelector("#overlay p").textContent = description;
        });
    });

    // EventListener del boton de cerrar
    document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
        overlay.classList.remove("activo");
    });

    // EventListener del overlay
    overlay.addEventListener("click", (evento) => {
        evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
    });
});