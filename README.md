# web.soichirosaimon.com

Personal page for Soichiro (Sony) Saimon plus the client demo sites, published with GitHub Pages.

| Path | What it is |
|---|---|
| `home/` | The personal page served at https://web.soichirosaimon.com/ (`index.html`, `favicon.svg`, `404.html`). Edit `home/index.html` to change the text. |
| `sites/<name>/` | Standalone client sites, published as-is at `/<name>/`. Each has its own README. Pushed here by each site's `deploy.sh`. |
| `build.py` | Copies `home/` and `sites/*` into `dist/`. Run by the GitHub Action on every push to `main`. |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages. |

Live sites: `/her-nails-lounge/`, `/a1-barber-studio/`.

The Atlantis Dental site that used to live here was removed on 2026-09-18. Its source is still in
`~/atlantis-dental-website` locally and in this repo's git history (commit 4476a0c and earlier).
