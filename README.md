# reizedup

My links page, live at **https://reizedup.cc**.

A single static page with a click-to-enter screen, a looping background video, falling snow,
music, a typing status line and a views counter. It runs on Cloudflare Pages.

## Structure

```
public/
  index.html          the whole page (HTML, CSS and JS in one file)
  media/              avatar, background video and poster, song, animated status sticker
  _headers            caching for media files
functions/
  _middleware.js      redirects www.reizedup.cc to reizedup.cc
  api/views.js        views counter (POST /api/views), counts each browser once a day
wrangler.toml         Pages project settings and the KV binding for the counter
```

## Deploy

```bash
npx wrangler pages deploy public --project-name=reizedup --branch=main
```

The counter keeps its total in the `VIEWS` KV namespace under the key `total`.
