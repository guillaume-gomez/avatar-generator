interface borderInterface {
  x: number;
  y: number;
  widthPixel: number;
  heightPixel: number;
}

interface colorInterface {
  r: number;
  g: number;
  b: number;
}


const BLACK : colorInterface = { r: 0, g:0, b:0 };

function randomColor() : colorInterface {
  return { r: Math.random() * 255, g: Math.random() * 255, b: Math.random() * 255 };
}

function randomInArrayColor(colors: colorInterface[]) : colorInterface {
  return colors[Math.floor(Math.random() * colors.length)];
} 


function createSquare(border: borderInterface, context: CanvasRenderingContext2D, color: colorInterface) : void {
  context.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
  context.fillRect(border.x, border.y, border.widthPixel, border.heightPixel);
}


function generateRowColors(nbPixelWidth: number) : colorInterface[] {
  let bitsColor : colorInterface[] = [];
  const randomColors : colorInterface[] =[
    randomColor(),
    randomColor(),
    randomColor(),
    BLACK,
    BLACK,
    BLACK
  ];

  for(let i = 0; i < Math.floor(nbPixelWidth/2); i++) {
    bitsColor.push(randomInArrayColor(randomColors));
  }
  bitsColor.slice(0).reverse().forEach((bit) => bitsColor.push(bit));
  return bitsColor;
}

export function createInvader({ x, y, widthPixel, heightPixel }: borderInterface, context: CanvasRenderingContext2D, nbPixelWidth: number, nbPixelHeight: number) : void {
  for(let y : number = 0; y < nbPixelWidth; y += 1) {
    const bitsColor = generateRowColors(nbPixelWidth);
    for(let x: number = 0; x < nbPixelHeight; x += 1) {
      createSquare(
        { x: x + (x * widthPixel),
          y: y + (y * heightPixel),
          widthPixel,
          heightPixel
         },
         context,
         bitsColor[x]
      );
    }
  }
}