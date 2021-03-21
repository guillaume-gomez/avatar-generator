import { setCanvasSize, changeBackgroundCanvas, getCanvas, draw } from "./canvas";
import { createInvader } from "./avatar";

function load() {
 const canvas = getCanvas();
  if (canvas.getContext) {
    const nbPixelWidth = 8;
    const nbPixelHeight = 8;
    const widthPixel = canvas.width / nbPixelWidth;
    const heightPixel = canvas.height / nbPixelWidth;

    const context = canvas.getContext('2d');
    createInvader({x: 0, y:0, widthPixel, heightPixel }, context, nbPixelWidth, nbPixelHeight);
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

// GLOBALS VARIABLES
let widthCanvas = 0;
let heightCanvas = 0;
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
};

