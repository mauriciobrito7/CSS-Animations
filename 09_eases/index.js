let myBtn = document.getElementById("button");

const animate = () => {
    document.body.classList.toggle("animate");
};

myBtn.addEventListener("click", () => animate());