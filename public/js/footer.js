// Footer: local time and the views counter.
import { timeZone } from "./config.js";

const CLOCK_REFRESH_MS = 15_000;

export function startClock() {
  const clock = document.getElementById("clock");
  const format = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone });
  const update = () => (clock.textContent = `◷ ${format.format(new Date())}`);

  update();
  setInterval(update, CLOCK_REFRESH_MS);
}

// POST counts this visit (once a day per browser) and returns the total.
export async function loadViews() {
  try {
    const res = await fetch("/api/views", { method: "POST" });
    const { views } = await res.json();
    document.getElementById("views").textContent = `◉ ${Number(views).toLocaleString("en")} views`;
  } catch {
    // Counter is decoration: keep the placeholder if the API is down.
  }
}
