import React, { useEffect, useRef } from 'react';

type RGB = `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

function drawSin(ctx: CanvasRenderingContext2D, w: number, h: number, color: Color, wav: number, dY: number) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(0, dY);
  ctx.quadraticCurveTo(w / 4, dY - wav, w / 2, dY);
  ctx.lineTo(w / 2, dY);
  ctx.quadraticCurveTo((w * 3) / 4, dY + wav, w, dY);

  
  

  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function addWave(ctx0: CanvasRenderingContext2D, color: Color, rate: number = 0.60, wave: number = 45, flat: number = 360, speed: number = 7) {
  const canvas = document.createElement('canvas');
  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.offsetHeight;
  let mW = canvas.height*1.2;
  if (mW < canvas.width) mW = canvas.width;
  const ctx = canvas.getContext('2d', {alpha: true})!;
  drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);

  const rate1 = rate, wave1 = wave, flat1 = flat;
  let x = 0;
  let flatDelta = canvas.width < canvas.height ? 2 : 1;//range 120 - 500 ?
  const flatRange = 0.75*flat;
  let waveDelta = 0.25;
  const waveRange = 0.25*wave;
  function animation() {
    if (rate !== rate1 || wave1 !== wave) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);
    }

    
    if((flat > (flat1+flatRange) && flatDelta > 0) || (flat < (flat1-flatRange) && flatDelta < 0)) flatDelta *=-1;
    flat += flatDelta;

    if((wave > (wave1+waveRange) && waveDelta > 0) || (wave < (wave1-waveRange) && waveDelta < 0)) waveDelta *=-1;
    wave += waveDelta;
    ctx0.drawImage(canvas, x-0.5, 0, mW + flat , canvas.height);
    ctx0.drawImage(canvas, x - mW - flat, 0, mW + flat, canvas.height);
    x >= (mW - speed + flat) ? x = 0 : x += speed;
  }

  return animation;
}

export const calcWave = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  return base*ratio;
};


export const calcFlat = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  if (ratio < 0.75) ratio = 0.75;
  return base*ratio;
};

export const calcSpeed = (ratio: number, base: number) => {
  if (ratio > 1) ratio = 1;
  return base*ratio < 0.75 ? 0.75 : base*ratio;
};

interface WaveProps {
  color: Color;
  rate: number;
  wave: number;
  flat: number;
  speed: number;
}

export const Wave: React.FC<WaveProps> = React.memo(({
  color,
  rate,
  wave,
  flat,
  speed
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || !canvasRef.current.getContext('2d')) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;
    let ratio = canvas.width / canvas.height;
    
    let anim0 = addWave(ctx, color, rate, calcWave(ratio, wave), calcFlat(ratio, flat), calcSpeed(ratio, speed));

    const resizeListener = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;
      ratio = canvas.width / canvas.height;
      anim0 = addWave(ctx, color, rate, calcWave(ratio, wave), calcFlat(ratio, flat), calcSpeed(ratio, speed));

    };
    window.addEventListener('resize', resizeListener);

    function animations() {
      if (ctx) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        anim0();
      }
      requestAnimationFrame(animations);
    }
    animations();

    return () => {
      window.removeEventListener('resize', resizeListener);
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <>
      <div css={{
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
        height: '100vh',
        width: '100vw',
      }}>
        <canvas 
          ref={canvasRef} height={document.body.offsetHeight} width={document.body.offsetWidth}
        />
      </div>
    </>
    
  );
});

