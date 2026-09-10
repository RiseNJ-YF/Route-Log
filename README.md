# Route Log — putting it on GitHub Pages

This folder is the app, packaged so your phone will install it: own icon, no
browser bars, opens with no signal.

Everything here is static. No build step, no dependencies, nothing to compile.

## Before you start

**The repo has to be public.** On a free GitHub account, Pages only publishes
from public repositories — private ones need Pro. That's fine here: none of
your trips live in the repo. The files are just the app, and your log is stored
on your phone. Nobody reading the repo sees a single trip, fee, or school.

If you'd rather it not be public at all, the alternative is a subfolder on
risearchitecture.com.

## Publishing it

1. New repository, name it `route-log`, set it **Public**, create.
2. Upload the contents of this folder — `index.html`, `manifest.webmanifest`,
   `sw.js`, `.nojekyll`, and the `icons` folder. Drag them onto the repo page.
   Upload the *contents*, not the folder itself, so `index.html` sits at the
   top level of the repo.
3. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder
   `/ (root)`. Save.
4. Wait a minute or two. Your app is at
   `https://YOURNAME.github.io/route-log/`

HTTPS is automatic, which is the part that makes it installable.

## Installing it on your phone

Open that URL on your phone, then:

- **iPhone** — must be Safari. Share button → Add to Home Screen.
- **Android** — Chrome menu → Install app (or Add to Home screen).

Launch it from the icon, not a browser tab. On iPhone that matters: Safari
wipes a site's stored data after seven days without a visit, but home-screen
apps are exempt from that sweep. From the icon, your log stays put.

## Moving your existing trips over

Storage is tied to the address the app runs at, so trips logged in the
downloaded file won't show up at the GitHub URL. Carry them across once:

1. Old copy → Your details → **Back up trips**. Saves a `.json` file.
2. Installed app → Your details → **Restore a backup** → pick that file.

Then work only in the installed one.

## Changing it later

Edit `index.html`, and bump `CACHE = "route-log-v1"` to `v2` in `sw.js` before
you push. Without that bump, phones keep serving the cached old copy and you'll
think your change didn't deploy.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app — markup, styles, and logic in one file |
| `manifest.webmanifest` | Name, icon, and colors your phone reads when installing |
| `sw.js` | Caches the app so it opens offline |
| `.nojekyll` | Tells Pages to serve the files as-is |
| `icons/` | Home screen icons |
