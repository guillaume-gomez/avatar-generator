function load() {
  setCanvasSize(400,200);
  changeBackgroundCanvas(true);
  draw();
}


function getCanvas() : HTMLCanvasElement | null {
  return document.getElementById('canvas') as HTMLCanvasElement;
}

function setCanvasSize(width: number, height: number) : void  {
  const canvas = getCanvas();
  canvas.width = width;
  canvas.height = height;
}

function draw() : void {
  const canvas = getCanvas();
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
}

function changeBackgroundCanvas(random : boolean = false) : void {
  const canvas = getCanvas();
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const color = random ? 
      `rgba(
         ${Math.random() * 255},
         ${Math.random() * 255},
         ${Math.random() * 255},
         1)`:
      'rgba(212,255,156,1)';
    ctx.fillStyle = color;
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  }
}

window.onload = function() {
   load()
   // connect button
   const button = document.getElementById("reset-button");
   if(button) {
     button.addEventListener("click", load);
   }
};

