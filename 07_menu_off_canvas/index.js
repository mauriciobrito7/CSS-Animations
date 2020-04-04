let menu = document.getElementById("toggle-menu");
const body = document.body;

const toggleMenu = () => {
    body.classList.toggle("translate");

    body.classList.add("overflow-hidden");

    if (!body.classList.contains("translate")) {
        body.classList.remove("overflow-hidden");
    }
    // body.addEventListener("transitionend", () => {
    //     if (!body.classList.contains("translate")) {
    //         body.classList.remove("overflow-hidden");
    //     }
    // });
};

menu.addEventListener("click", () => toggleMenu());