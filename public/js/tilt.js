const MAX_DEG = 4;

export function setupTilt() {
  const hasMouse = matchMedia("(hover: hover)").matches;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hasMouse || reducedMotion) return;

  const card = document.getElementById("card");
  addEventListener("mousemove", (e) => {
    if (!document.body.classList.contains("entered")) return;
    const x = (e.clientX / innerWidth - 0.5) * 2 * MAX_DEG;
    const y = (e.clientY / innerHeight - 0.5) * -2 * MAX_DEG;
    card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
  });
}
