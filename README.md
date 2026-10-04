# reizedup

My links page, live at **https://reizedup.cc**.

A static page with a click-to-enter screen, a looping background video, falling snow,
music, a typing status line, an animated Telegram emoji, my local time and a views counter.
No frameworks and no build step: plain HTML, CSS and JS modules on Cloudflare Pages.

## Changing the content

Almost everything is in [`public/js/config.js`](public/js/config.js):

- `socials`: the row of icons under the name
- `links`: the big buttons
- `statusLines` and `typing`: what the status line types and how fast
- `timeZone`: the footer clock
- `musicVolume`

An item with `href` opens a link. An item with `copy` copies the text on click (used for Discord).
Icon names are [Simple Icons](https://simpleicons.org) slugs.

The name, avatar, badge and location are in `public/index.html`.

## Structure

```
public/
  index.html          page markup
  css/
    base.css          colours, reset, page layout
    backdrop.css      background video, vignette, snow canvas, "click to enter" screen
    card.css          glass card, avatar, name, badge, status line, location
    links.css         social icons and the link list
    footer.css        views, clock, mute button, toast
  js/
    main.js           entry point, starts everything
    config.js         content and settings
    links.js          builds icons and links from config, copy-to-clipboard
    enter.js          click-to-enter screen, music, mute button
    typewriter.js     status line
    snow.js           snow animation
    tilt.js           card tilt on mouse move (desktop only)
    footer.js         clock and views counter
    toast.js          "copied" message
  media/              avatar, background video and poster, song, status sticker
  _headers            caching for media
functions/
  _middleware.js      www.reizedup.cc -> reizedup.cc
  api/views.js        views counter: POST /api/views, once a day per browser, stored in KV
wrangler.toml         Pages project and the VIEWS KV binding
```

## Run and deploy

```bash
npx wrangler pages dev public      # local, with the counter
npx wrangler pages deploy public --project-name=reizedup --branch=main
```
