// Everything you'd want to change on the page lives here.

// Icons come from Simple Icons: https://simpleicons.org (use the slug, e.g. "telegram").
export const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

// Round icons under the name. Use `href` for a link, or `copy` to copy text on click.
export const socials = [
  { title: "Telegram", icon: "telegram", href: "https://t.me/reizedup" },
  { title: "Discord: god2save", icon: "discord", copy: "god2save" },
  { title: "GitHub", icon: "github", href: "https://github.com/Reizoo" },
  { title: "Steam", icon: "steam", href: "https://steamcommunity.com/id/reizedup" },
  { title: "VK", icon: "vk", href: "https://vk.com/gotmyselfback" },
];

// Big buttons in the list. Same rule: `href` opens a link, `copy` copies text.
export const links = [
  { label: "Channel", hint: "@reikoks", icon: "telegram", href: "https://t.me/reikoks" },
  { label: "Bio", hint: "@userlog_exe", icon: "telegram", href: "https://t.me/userlog_exe" },
  { label: "DM me", hint: "@reizedup", icon: "telegram", href: "https://t.me/reizedup" },
  { label: "Discord", hint: "god2save · copy", icon: "discord", copy: "god2save" },
  { label: "GitHub", hint: "Reizoo", icon: "github", href: "https://github.com/Reizoo" },
];

// Status lines typed one after another under the name.
export const statusLines = [
  "last seen: probably awake",
  "currently: building something",
  "don't dm me \"hi\"",
  "if it works, don't touch it",
  "sleep is a suggestion",
  "loading personality…",
];

// Typing speed, in milliseconds.
export const typing = {
  perChar: 115,     // typing one character
  hold: 2800,       // pause on a full line
  perDelete: 55,    // erasing one character
  gap: 600,         // pause before the next line
};

// Clock in the footer. Only the time is shown, never the place.
export const timeZone = "Europe/London";

// Music volume after clicking in, from 0 to 1.
export const musicVolume = 0.35;
