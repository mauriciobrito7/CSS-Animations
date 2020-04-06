const myBtn = document.getElementById("button");
const timerEl = document.getElementById("timerEl");
let time = 0;
let timer;

myBtn.addEventListener("click", () => {
    myBtn.classList.add("animate");
});

// Eventos de animación

myBtn.addEventListener("animationstart", (event) => {
    document.getElementById(
        "messages"
    ).textContent = `ha comenzado la animación ${event.animationName}`;
    timer = setInterval(() => {
        time += 0.1;
        timerEl.textContent = time.toFixed(2);
    }, 100);
});

myBtn.addEventListener("animationiteration", () => {
    console.log("ha vuelto a comenzar la animación");
});

myBtn.addEventListener("animationend", () => {
    document.getElementById("messages").textContent = `La animación ha terminado`;
    clearInterval(timer);
});