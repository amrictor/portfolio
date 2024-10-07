import { darken, keyframes, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import duck from '../../assets/duck.svg'
import { addDuck, Duck } from './duck';

// 'rgba(28, 134, 209, 0.3)'
// 'rgba(28, 134, 209, 0.6)'
// 'rgba(28, 134, 209, 1.0)'

// const useStyles = makeStyles({
//   canvas: {
//     background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(28,134,209,1) 100%);',
//     position: 'absolute',
//     top: 0,
//     zIndex: -1,
//     height: '100vh',
//     width: '100vw',
//   }
// })

let blob = new Blob([duck], {type: 'image/svg+xml'});
let duckURL = URL.createObjectURL(blob);


type RGB = `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;
const image = new Image(60, 45); // Using optional size for image

  // image.onload = function() {
  
  //   // Will draw the image as 300x227, ignoring the custom size of 60x45
  //   // given in the constructor
  
  // }
  // Load an image of intrinsic size 300x227 in CSS pixels
  image.src = duck//"https://mdn.github.io/shared-assets/images/examples/rhino.jpg";
function drawSin(ctx: CanvasRenderingContext2D, w: number, h: number, color: Color, wav: number, dY: number) {
  ctx.save();
  // ctx.lineWidth = 10
  // ctx.strokeStyle = darken(color, 0.05);
  // ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(0, dY);
  ctx.quadraticCurveTo(w / 4, dY - wav, w / 2, dY);
  ctx.lineTo(w / 2, dY)
  ctx.quadraticCurveTo((w * 3) / 4, dY + wav, w, dY);

  
  

  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function addWave(ctx0: CanvasRenderingContext2D, color: Color, rate: number = 0.60, wave: number = 45, flat: number = 360, speed: number = 7) {
  let canvas = document.createElement('canvas');
  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.offsetHeight;
  let mW = canvas.height*1.2;
  if (mW < canvas.width) mW = canvas.width;
  let ctx = canvas.getContext('2d',  {alpha: true})!;
  drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);

  // ctx.drawImage(image, 0 - wave, canvas.height - (canvas.height * rate));
  var rate1 = rate, wave1 = wave, flat1 = flat
  let x = 0;
  let flatDelta = canvas.width < canvas.height ? 2 : 1//range 120 - 500 ?
  let flatRange = 0.75*flat;
  let waveDelta = 0.25
  let waveRange = 0.25*wave;
  function animation() {
    if (rate !== rate1 || wave1 !== wave) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);
          
        // const ratio = canvas.width / canvas.height;
        // const wave = calcWave(ratio, 90);
        // const rate = calcSpeed(ratio, 2);
        // const dY = canvas.height - canvas.height * rate
        // ctx.drawImage(image, 0 - wave, dY - wave, 300, 350);
    }

    
    if((flat > (flat1+flatRange) && flatDelta > 0) || (flat < (flat1-flatRange) && flatDelta < 0)) flatDelta *=-1
    flat += flatDelta

    if((wave > (wave1+waveRange) && waveDelta > 0) || (wave < (wave1-waveRange) && waveDelta < 0)) waveDelta *=-1
    wave += waveDelta
    ctx0.drawImage(canvas, x-0.5, 0, mW + flat , canvas.height)
    ctx0.drawImage(canvas, x - mW - flat, 0, mW + flat, canvas.height)
    x >= (mW - speed + flat) ? x = 0 : x += speed
  }

  return animation;
}

export const calcWave = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  return base*ratio
}


export const calcFlat = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  if (ratio < 0.75) ratio = 0.75;
  return base*ratio
}

export const calcSpeed = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  return base*ratio < 0.75 ? 0.75 : base*ratio
}

const calcHeightDiff = (ratio: number) => {
  if (ratio > 1) ratio = 1;
  return ratio * 0.25
}


export const Waves: React.FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || !canvasRef.current.getContext('2d')) return;
    var canvas: HTMLCanvasElement = canvasRef.current;
    let ctx = canvas.getContext('2d')
    if(!ctx) return;
    let ratio = canvas.width / canvas.height;
    // let heightDiff = calcHeightDiff(ratio)
    
    let anim0 = addWave(ctx, 'rgb(186,218,241)', 0.65, calcWave(ratio, 70), calcFlat(ratio, 60), calcSpeed(ratio, 4));
    let anim2 = addWave(ctx, 'rgb(91,167,221)', 0.45, calcWave(ratio, 90), calcFlat(ratio, 170), calcSpeed(ratio, 2));
    let anim3 = addWave(ctx, 'rgb(28,134,209)' as Color, 0.2, calcWave(ratio, 60), calcFlat(ratio,120), calcSpeed(ratio, 3));

    const resizeListener = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;
      ratio = canvas.width / canvas.height;
      anim0 = addWave(ctx, 'rgb(186,218,241)', 0.65, calcWave(ratio, 70), calcFlat(ratio, 60), calcSpeed(ratio, 4));
      anim2 = addWave(ctx, 'rgb(91,167,221)', 0.45, calcWave(ratio, 90), calcFlat(ratio, 170), calcSpeed(ratio, 2));
      anim3 = addWave(ctx, 'rgb(28,134,209)', 0.2, calcWave(ratio, 60), calcFlat(ratio,120), calcSpeed(ratio, 3));
      
    }
    window.addEventListener("resize", resizeListener);

    function animations() {
      if (ctx) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
        anim0();
        anim2();
        anim3();
      }
      requestAnimationFrame(animations);
    }
    animations();

    return () => {
      window.removeEventListener("resize", resizeListener);
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, []);
  
  // const float = keyframes`
  //   from {
  //     transform: rotate(5deg) translateY(10px) translateX(0px)
  //   }
  //   45% {
  //     transform: rotate(12deg) translateY(-3px)
  //   }  
  //   75% {
    
  //     transform: rotate(5deg) translateX(5px)
  //   }
  //   to {
  //     transform: rotate(15deg) translateY(-3px) translateX(-8px)
  //   }
  // `
 
  return (
    <div css={{
      background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(28,134,209,1) 100%);',
      position: 'absolute',
      top: 0,
      zIndex: -1,
      height: '100vh',
      width: '100vw',
    }}>
      {/* <img 
        css={{
          position: 'absolute',
          animation: `3s ease-in-out ${float} infinite alternate`,
          height: 300,
          top: `${0.45*window.innerHeight}px`,
          right: `${0.15*window.innerWidth}px`,
          transform: 'skewX(-10deg)',
          // borderRadius: 25,
          // boxShadow: '0px 15px 15px red',
        }}
        src={duck}
      />  */}
      {/*<Duck/>*/}
      <canvas 
        ref={canvasRef} height={document.body.offsetHeight} width={document.body.offsetWidth}
      />
    </div>
    
  );
})

