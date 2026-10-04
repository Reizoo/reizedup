const KEY = "total";
const SEEN_COOKIE = "seen=1";
const ONE_DAY = 60 * 60 * 24;

export async function onRequestPost({ request, env }) {
  let views = Number(await env.VIEWS.get(KEY)) || 0;
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };

  if (!hasSeenCookie(request)) {
    views += 1;
    await env.VIEWS.put(KEY, String(views));
    headers["Set-Cookie"] = `${SEEN_COOKIE}; Max-Age=${ONE_DAY}; Path=/; Secure; HttpOnly; SameSite=Lax`;
  }

  return Response.json({ views }, { headers });
}

function hasSeenCookie(request) {
  const cookies = (request.headers.get("Cookie") || "").split(";").map((c) => c.trim());
  return cookies.includes(SEEN_COOKIE);
}
