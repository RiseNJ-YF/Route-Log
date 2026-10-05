# Route Log

One app for both sides of substitute bus driving. On first launch it asks how
you'll use it:

- **I drive** — log the trips you cover, check them off as schools pay, and
  send each school a PDF record of what you're owed.
- **I manage subs** — track routes your subs drive across schools. A switch at
  the top flips between **Pay drivers** (what you owe each sub) and **Bill
  schools** (what each school owes you), with pay statements and invoices.

Switch any time in Settings. Nothing is deleted when you switch:

- Driver → manager: your own trips show under Pay drivers with your name, and
  under Bill schools at the fee you charged.
- Manager → driver: routes other subs drove are kept, just hidden until you
  switch back.

## Updating from the two separate apps

This replaces Route Log at its existing URL. Push it to the `route-log` repo.

On first launch it looks for data from the old **Route Log** and **Route Desk**
on the same device and brings both in automatically. That works because GitHub
Pages serves all your repos from one site (`yourname.github.io`), and browsers
keep storage per site. The old data is copied, never deleted, so the old apps
keep working if anything goes wrong.

Managers who used Route Desk should open the Route Log URL from now on and
install it from there. Once you've confirmed everything came across, you can
delete the `route-desk` repo.

If the old data is on a different device, use Back up in the old app, then
Settings → Restore a backup here. It accepts backups from the old Route Log,
the old Route Desk, and this app.

## Subs and managers working together

A sub's Settings → Export spreadsheet produces a file the manager imports with
Settings → Import spreadsheet. It asks which sub it's from, maps their fee to
driver pay, and leaves the manager's school billing alone. Importing the same
file twice updates rather than duplicates.

## Publishing

Upload the contents of this folder so `index.html` is at the top level of the
repo. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Changing it later

Bump `CACHE = "route-log-v24"` in `sw.js` whenever you change `index.html`, or
installed copies keep serving the old version.
