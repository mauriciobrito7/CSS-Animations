const video = document.getElementById("video");
console.log(video);

const options = {
    // root, // elemento que estamos escuchando
    // rootMargin: `0px 0px ${Math.round(video.clientHeight)}px 0px`, // en que momento de mi intersección quiero tener un espaciado extra para reproducir el video algunos pixeles antes de que coincida con el
    threshold: 1, // definimos cuando quiero que mi callback se llame
    // 0 se verá a penas se este viendo el viewport
    // 1 cuando el elemento completo se esta viendo
    //  se puede pasar un array
};

// puedo observar más de un elemento
function callback(entries, observer) {
    console.log("se llamó callback");
    // si cumple las condiciones de mis opciones
    if (entries[0].isIntersecting) {
        video.play();
        video.muted = false;
    } else {
        video.pause();
    }
}

// calcback - options
const observer = new IntersectionObserver(callback, options);

observer.observe(video);