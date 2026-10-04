const SHOW_MS = 1800;
let hideTimer;

export function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => toast.classList.remove("show"), SHOW_MS);
}
