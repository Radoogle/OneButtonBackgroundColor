/* jshint esversion: 6 */
const button = document.getElementById('btn');
const backg  = document.getElementById('container');
const displayRGB  = document.getElementById('displayRGB');
const displayHEX  = document.getElementById('displayHEX');

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

function changeBackgroundColor() {
    let r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const complementaryColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    backg.style.backgroundColor = rgbColor;
    displayRGB.innerText = rgbColor;
    displayHEX.innerText = RGBToHex(r,g,b);
    complimentary.innerText = complementaryColor;
    button.style.backgroundColor = complementaryColor;
    button.style.color = rgbColor;
}


button.addEventListener('click', changeBackgroundColor, false);