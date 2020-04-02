let mybtn = document.getElementById("animate");

const animate = ({ target }) => {
    document.body.classList.toggle("animate");
    target.innerText === "Animar" ?
        (event.target.innerText = "Detener") :
        (event.target.innerText = "Animar");
};

mybtn.addEventListener("click", () => animate(event));