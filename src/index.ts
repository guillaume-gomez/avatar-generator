import { setCanvasSize, changeBackgroundCanvas, getCanvas, draw } from "./canvas";
import { createInvader } from "./avatar";

function load() {
 const canvas = getCanvas();
  if (canvas.getContext) {
    const nbPixelWidth = nbPixelX || 8;
    const nbPixelHeight = nbPixelY || 8;
    const widthPixel = Math.floor(canvas.width / nbPixelWidth);
    const offsetWidth = (canvas.width % nbPixelWidth);
    
    const heightPixel = Math.floor(canvas.height / nbPixelHeight);
    const offsetHeight = (canvas.height % nbPixelHeight);

    const context = canvas.getContext('2d');
    // refresh
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    createInvader({x: offsetWidth /2 , y: offsetHeight / 2, widthPixel, heightPixel }, context, nbPixelWidth, nbPixelHeight);
  }
}

function changeCanvasSlider(size: "width"| "height", e: Event) : void {
  const newValue : number = (e as any).target.value;
  if(size === "width") {
    widthCanvas = newValue;
  } else {
    heightCanvas = newValue;
  }
  setCanvasSize(widthCanvas, newValue);
}

function changePixelSlider(size: "x"| "y", e: Event) : void {
  const newValue : number = (e as any).target.value;
  if(size === "x") {
    nbPixelX = newValue;
  } else {
    nbPixelY = newValue;
  }
}

// GLOBALS VARIABLES
let widthCanvas = 0;
let heightCanvas = 0;
let nbPixelX = 0;
let nbPixelY = 0;
window.onload = function() {
  load()
  // connect button + inputs
  const button = document.getElementById("reset-button");
   if(button) {
     button.addEventListener("click", load);
  }

  const inputWidth = document.getElementById("widthCanvas");
  if(inputWidth) {
    inputWidth.addEventListener("change", (e) => { changeCanvasSlider("width", e); load() });
  }
  const inputHeight = document.getElementById("heightCanvas");
  if(inputHeight) {
    inputHeight.addEventListener("change", (e) => { changeCanvasSlider("height", e); load() });
  }

  const inputPixelX = document.getElementById("nbPixelX");
  if(inputPixelX) {
    inputPixelX.addEventListener("change", (e) => { changePixelSlider("x", e); load() });
  }
  const inputPixelY = document.getElementById("nbPixelY");
  if(inputPixelY) {
    inputPixelY.addEventListener("change", (e) => { changePixelSlider("y", e); load() });
  }
};

