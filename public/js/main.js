import { renderLinks } from "./links.js";
import { setupEnter } from "./enter.js";
import { startTypewriter } from "./typewriter.js";
import { startSnow } from "./snow.js";
import { setupTilt } from "./tilt.js";
import { startClock, loadViews } from "./footer.js";

renderLinks();
startSnow();
setupTilt();
startClock();
loadViews();

setupEnter(startTypewriter);
