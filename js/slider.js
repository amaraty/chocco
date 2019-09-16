const rootSlider = document.getElementById('sliderRoot');
const leftArrow = document.querySelector('.arrow--left');
const rightArrow = document.querySelector('.arrow--right');

let sliderStep = 0;

leftArrow.addEventListener('click', function(){
    console.log('LeftClick');
    sliderStep -= 884;
    rootSlider.style.transform = "translate(-" + sliderStep + "px)";
    console.log(sliderStep)
});

rightArrow.addEventListener('click', function(){
    console.log('RightClick');
    sliderStep += 884;
    rootSlider.style.transform = "translate(-" + sliderStep + "px)";

    console.log('plus', sliderStep)
});

function calculateMaxWidth(){
    console.log(rootSlider.childNodes)
}

/*const left = document.querySelector("#left");
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
});*/
