/* jshint esversion: 6 */
const button = document.getElementById('btn');
const backg  = document.getElementById('container');
const display  = document.getElementById('display');

function changeBackgroundColor() {
    let r = Math.random() * 255,
        g = Math.random() * 255,
        b = Math.random() * 255;
    backg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    display.innerText = backg.style.backgroundColor;
}

button.addEventListener('click', changeBackgroundColor, false);

