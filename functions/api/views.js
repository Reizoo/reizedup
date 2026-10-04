// Profile view counter. Counts a browser once per day (cookie), stores the total in KV.
export async function onRequestPost({ request, env }) {
  const cookie = request.headers.get("Cookie") || "";
  let views = parseInt((await env.VIEWS.get("total")) || "0", 10);
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
  if (!/(?:^|;\s*)seen=1/.test(cookie)) {
    views += 1;
    await env.VIEWS.put("total", String(views));
    headers["Set-Cookie"] = "seen=1; Max-Age=86400; Path=/; Secure; HttpOnly; SameSite=Lax";
  }
  return new Response(JSON.stringify({ views }), { headers });
}
