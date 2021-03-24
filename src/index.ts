import { setCanvasSize, changeBackgroundCanvas, getCanvas, draw } from "./canvas";
import { createInvader, colorInterface } from "./avatar";
import { hexToRgb } from "./tools";

function load() {
 const canvas = getCanvas();
  if (canvas.getContext) {
    const nbPixelWidth = nbPixelX || 8;
    const nbPixelHeight = nbPixelY || 8;
    const context = canvas.getContext('2d');
    // refresh
    context.clearRect(0, 0, canvas.width, canvas.height);


    // only one avatar
    if(repetition === 1) {
      
      const avatarWidth = Math.floor(canvas.width / nbPixelWidth);
      const offsetWidth = (canvas.width % nbPixelWidth);
      
      const avatarHeight = Math.floor(canvas.height / nbPixelHeight);
      const offsetHeight = (canvas.height % nbPixelHeight);

      createInvader(
        {x: offsetWidth /2 , y: offsetHeight / 2, widthPixel: avatarWidth, heightPixel: avatarWidth },
        context,
        nbPixelWidth,
        nbPixelHeight,
        colors
      );
    } else { // patchwork
      const avatarWidth = canvas.width / repetition;
      const avatarHeight = canvas.height / repetition;
      
      const widthPixel = Math.floor(avatarWidth / nbPixelWidth);
      const offsetWidth = avatarWidth % nbPixelWidth;

      const heightPixel = Math.floor(avatarHeight / nbPixelHeight);
      const offsetHeight = (avatarHeight % nbPixelHeight);

      for(let _x = 0; _x < repetition; _x += 1) {
        for(let _y = 0; _y < repetition; _y += 1) {
          createInvader(
            {x: (offsetWidth / 2) +_x * avatarWidth , y: (offsetHeight / 2) + _y * avatarHeight, widthPixel, heightPixel },
            context,
            nbPixelWidth,
            nbPixelHeight,
            colors
          );
        }
      }
    }
  }
}

function changeCanvasSlider(size: "width"| "height", e: Event) : void {
  const newValue : number = (e as any).target.value;
  if(size === "width") {
    widthCanvas = newValue;
    document.getElementById("widthCanvasValue").textContent = newValue.toString();
  } else {
    heightCanvas = newValue;
    document.getElementById("heightCanvasValue").textContent = newValue.toString();
  }
  setCanvasSize(widthCanvas, newValue);
}

function changePixelSlider(size: "x"| "y", e: Event) : void {
  const newValue : number = (e as any).target.value;
  if(size === "x") {
    nbPixelX = newValue;
    document.getElementById("nbPixelXValue").textContent = newValue.toString();
  } else {
    nbPixelY = newValue;
    document.getElementById("nbPixelYValue").textContent = newValue.toString();
  }
}

function feedColors() {
  const newColors : colorInterface[] = [];
  Array.from(document.querySelectorAll("input[type=color]")).forEach((item: HTMLInputElement, index: number) => {
    const checkbox = document.getElementById(`color-${index+1}`) as HTMLInputElement;
    if(checkbox.checked) {
      newColors.push(hexToRgb(item.value));
    }
  });
  colors = newColors.slice();
}

function changeRepetition(e: Event) {
  const newValue = (e as any).target.value;
  document.getElementById("repetitionValue").textContent = newValue.toString();
  repetition = newValue
}

function saveImage() {
  const canvas = getCanvas();
  if(canvas) {
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = image;
  } else {
    alert("canvas not detected");
  }
}

// GLOBALS VARIABLES
let widthCanvas = 0;
let heightCanvas = 0;
let nbPixelX = 0;
let nbPixelY = 0;
let repetition = 1;
let colors :colorInterface[] = [];
window.onload = function() {
  feedColors();
  load();
  
  // connect button + inputs
  const button = document.getElementById("reset-button");
   if(button) {
     button.addEventListener("click", load);
  }

  const saveButton = document.getElementById("save-button");
   if(saveButton) {
     saveButton.addEventListener("click", saveImage);
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

  const repetition = document.getElementById("repetition");
  if(repetition) {
    repetition.addEventListener("change", (e) => { changeRepetition(e); load() });
  }

  //connect each color input
  Array.from(document.querySelectorAll("input[type=color]")).forEach( (item: HTMLInputElement) => {
    item.addEventListener("change", feedColors);
  })
  //then colors checkboxes checkbox
  Array.from(document.querySelectorAll("input[type=checkbox]")).forEach( (item: HTMLInputElement) => {
    item.addEventListener("change", feedColors);
  })

};

