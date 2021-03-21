
export function getCanvas(canvasId: string = 'canvas') : HTMLCanvasElement | null {
  return document.getElementById(canvasId) as HTMLCanvasElement;
}

export function setCanvasSize(width: number, height: number) : void  {
  const canvas = getCanvas();
  canvas.width = width;
  canvas.height = height;
}

export function draw(callback: (ctx: CanvasRenderingContext2D) => void) : void {
  const canvas = getCanvas();
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    callback(ctx);
  }
}

export function changeBackgroundCanvas(random : boolean = false) : void {
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