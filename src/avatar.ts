interface borderInterface {
  x: number;
  y: number;
  widthPixel: number;
  heightPixel: number;
}

export interface colorInterface {
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


function generateRowColors(nbPixelWidth: number, colorsPalette: colorInterface[]) : colorInterface[] {
  let bitsColor : colorInterface[] = [];
  for(let i = 0; i < Math.floor(nbPixelWidth/2); i++) {
    bitsColor.push(randomInArrayColor(colorsPalette));
  }

  bitsColor.slice(0).reverse().forEach((bit) => bitsColor.push(bit));

  // add one more bits for odds width
  if(nbPixelWidth % 2 !== 0) {
    bitsColor.splice(Math.floor(nbPixelWidth/2), 0, randomInArrayColor(colorsPalette));
  }

  return bitsColor;
}

export function createInvader(border : borderInterface, context: CanvasRenderingContext2D, nbPixelWidth: number, nbPixelHeight: number, colorsPalette: colorInterface[]) : void {
  const { x: xOffset , y: yOffset , widthPixel, heightPixel } = border;
  console.log(border)
  for(let y : number = 0; y < nbPixelHeight; y += 1) {
    const bitsColor = generateRowColors(nbPixelWidth, colorsPalette);
    for(let x: number = 0; x < bitsColor.length; x += 1) {
      createSquare(
        { x: xOffset + (x * widthPixel),
          y: yOffset + (y * heightPixel),
          widthPixel,
          heightPixel
         },
         context,
         bitsColor[x]
      );
    }
  }
}