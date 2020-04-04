let mybtn = document.getElementById("animate");

const animate = event => {
    document.body.classList.add("animate");
    /*Las animaciones tienen un evento llamado transitionend 
                                              es un unico evento
                                              */
    document.getElementById("ball").addEventListener("transitionend", e => {
        console.log(e);
        if (e.elapsedTime === 3) {
            document.body.classList.remove("animate");
        }
    });
};

mybtn.addEventListener("click", () => animate(event));