import { musicVolume } from "./config.js";

export function setupEnter(onEnter) {
  const screen = document.getElementById("enter");
  const song = document.getElementById("song");
  let entered = false;

  function enter() {
    if (entered) return;
    entered = true;
    screen.classList.add("gone");
    document.body.classList.add("entered");
    song.volume = musicVolume;
    song.play().catch(() => {});
    onEnter();
  }

  screen.addEventListener("click", enter);
  screen.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") enter();
  });

  setupMute(song);
}

function setupMute(song) {
  const button = document.getElementById("mute");
  const label = button.querySelector("span");

  button.addEventListener("click", () => {
    song.muted = !song.muted;
    label.textContent = song.muted ? "off" : "on";
    if (!song.muted && song.paused) song.play().catch(() => {});
  });
}
