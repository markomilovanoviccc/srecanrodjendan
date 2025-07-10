const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

let hearts = [];
let backgroundHearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createHeart(x, y) {
  return {
    x,
    y,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * -1.5 - 1,
    speedX: Math.random() * 2 - 1,
    opacity: 1
  };
}

function createBackgroundHeart() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 30 + 10,
    speedY: Math.random() * 0.2 + 0.1,
    opacity: 0,
    fadeIn: true
  };
}

for (let i = 0; i < 50; i++) {
  backgroundHearts.push(createBackgroundHeart());
}

function triggerHearts() {
  const rect = heartButton.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  for (let i = 0; i < 15; i++) {
    hearts.push(createHeart(x, y));
  }
}

function drawHeart(x, y, size, opacity, color = "#a6eaff") {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 30, size / 30);
  ctx.globalAlpha = opacity;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
  ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
  ctx.bezierCurveTo(-35, 30, 0, 50, 0, 60);
  ctx.bezierCurveTo(0, 50, 35, 30, 35, 10);
  ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);

  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Hintergrund-Herzen
  backgroundHearts.forEach(h => {
    h.y += h.speedY;
    h.x += Math.sin(h.y / 20) * 0.3;

    h.opacity += h.fadeIn ? 0.003 : -0.002;

    if (h.opacity >= 0.15) h.fadeIn = false;

    if (h.y > canvas.height + 50) {
      h.y = -20;
      h.x = Math.random() * canvas.width;
      h.size = Math.random() * 30 + 10;
      h.opacity = 0;
      h.fadeIn = true;
    }

    drawHeart(h.x, h.y, h.size, h.opacity, "#a6eaff");
  });

  // Klick-Herzen
  hearts = hearts.filter(h => h.opacity > 0);
  hearts.forEach(h => {
    h.x += h.speedX;
    h.y += h.speedY;
    h.opacity -= 0.01;
    drawHeart(h.x, h.y, h.size, h.opacity, "#00cfcf");
  });

  requestAnimationFrame(animate);
}
animate();
