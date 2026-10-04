import { statusLines, typing } from "./config.js";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function startTypewriter() {
  const el = document.getElementById("typed");

  for (let i = 0; ; i = (i + 1) % statusLines.length) {
    const line = statusLines[i];

    for (let n = 1; n <= line.length; n++) {
      el.textContent = line.slice(0, n);
      await wait(typing.perChar);
    }
    await wait(typing.hold);

    for (let n = line.length; n >= 0; n--) {
      el.textContent = line.slice(0, n);
      await wait(typing.perDelete);
    }
    await wait(typing.gap);
  }
}
