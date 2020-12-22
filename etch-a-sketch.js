// Get the dom elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');
console.log(ctx);

// start drawing on canvas
const { width, height } = canvas;
const MOVE_AROUND = 10;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AROUND;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

function draw(options) {
  const { key } = options;
  hue += 1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AROUND;
      break;
    case 'ArrowRight':
      x += MOVE_AROUND;
      break;
    case 'ArrowDown':
      y += MOVE_AROUND;
      break;
    case 'ArrowLeft':
      x -= MOVE_AROUND;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKeyboardEvent(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

function clearCanvas() {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
  ctx.clearRect(0, 0, width, height);
}

window.addEventListener('keydown', handleKeyboardEvent);

shake.addEventListener('click', clearCanvas);
