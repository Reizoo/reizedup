// Builds the social icons and the link list from config.js.
import { ICON_CDN, socials, links } from "./config.js";
import { showToast } from "./toast.js";

const iconUrl = (slug) => `${ICON_CDN}/${slug}.svg`;

// An item with `href` becomes a link; an item with `copy` becomes a button.
function createItem(item, { title, alt = "" }) {
  const el = document.createElement(item.href ? "a" : "button");
  if (item.href) {
    el.href = item.href;
    el.target = "_blank";
    el.rel = "noopener";
  } else {
    el.type = "button";
    el.addEventListener("click", () => copyText(item.copy));
  }
  if (title) el.title = title;

  const img = document.createElement("img");
  img.src = iconUrl(item.icon);
  img.alt = alt;
  el.append(img);
  return el;
}

function socialIcon(item) {
  return createItem(item, { title: item.title, alt: item.title });
}

function linkRow(item) {
  const el = createItem(item, {});
  const label = document.createElement("b");
  const hint = document.createElement("small");
  label.textContent = item.label;
  hint.textContent = item.hint;
  el.append(label, hint);
  return el;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`copied: ${text}`);
  } catch {
    // Clipboard can be blocked (old browsers, http): show the text instead.
    showToast(`discord: ${text}`);
  }
}

export function renderLinks() {
  document.getElementById("socials").append(...socials.map(socialIcon));
  document.getElementById("links").append(...links.map(linkRow));
}
