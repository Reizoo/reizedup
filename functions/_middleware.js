// www.reizedup.cc -> reizedup.cc
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "www.reizedup.cc") {
    url.hostname = "reizedup.cc";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
