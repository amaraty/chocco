const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slides = document.querySelector("#slides");

right.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

    if( !currentRight) {
        currentRight = 0;
    }

    if(currentRight < 400) {
        slides.style.right = currentRight - 100 + "%"
    }
});
