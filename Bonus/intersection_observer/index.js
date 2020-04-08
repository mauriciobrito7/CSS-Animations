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

// create config object: rootMargin and threshold
// are two properties exposed by the interface
const configImage = {
    //rootMargin: "0px 0px 50px 0px",
    threshold: 1,
};

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    console.log(src);

    img.src = src;
}

// Observer images

const observerImg = new IntersectionObserver((entries, self) => {
    // iterate over each entry
    entries.forEach((entry) => {
        // process just the images that are intersecting.
        // isIntersecting is a property exposed by the interface
        if (entry.isIntersecting) {
            // custom function that copies the path to the img
            // from data-src to src
            preloadImage(entry.target);
            // the image is now in place, stop watching
            self.unobserve(entry.target);
        }
    });
}, configImage);

const imgs = document.querySelectorAll("[data-src]");
imgs.forEach((img) => {
    observerImg.observe(img);
});