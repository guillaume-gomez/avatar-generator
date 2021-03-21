import { setCanvasSize, changeBackgroundCanvas, getCanvas, draw } from "./canvas";
import { createInvader } from "./avatar";

function load() {
  setCanvasSize(400,200);
  changeBackgroundCanvas(true);

 const canvas = getCanvas();
  if (canvas.getContext) {
    const context = canvas.getContext('2d');
    createInvader({x: 10, y:10, widthPixel: 10, heightPixel: 10}, context,  8, 8);
  }
  //draw();
}


window.onload = function() {
   load()
   // connect button
   const button = document.getElementById("reset-button");
   if(button) {
     button.addEventListener("click", load);
   }
};

