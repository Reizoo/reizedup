// Falling snow on a full-screen canvas.
// Flake positions are stored from 0 to 1, so resizing the window doesn't move them around.
const MAX_FLAKES = 140;

export function startSnow() {
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  const flakes = Array.from({ length: Math.min(MAX_FLAKES, Math.round(innerWidth / 10)) }, newFlake);

  function resize() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
  }

  function frame() {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, .75)";

    for (const flake of flakes) {
      flake.y += flake.speed;
      flake.phase += 0.01;
      flake.x += Math.sin(flake.phase) * 0.0004; // gentle side-to-side drift
      if (flake.y > 1) Object.assign(flake, newFlake(), { y: -0.02 });

      ctx.beginPath();
      ctx.arc(flake.x * width, flake.y * height, flake.radius * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

function newFlake() {
  return {
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 1.8 + 0.4,
    speed: Math.random() * 0.0009 + 0.0004,
    phase: Math.random() * Math.PI * 2,
  };
}
