// get elements from html
let productCard = document.getElementsByClassName('product-card');
let hoverSound = new Audio('../audio/hover-effect.mp3');

productCard.onmouseleave = function() {
    hoverSound.play();
};