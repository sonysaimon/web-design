#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Static site builder for Atlantis Dental Yaletown.

Usage:  python3 build.py            -> writes HTML into ./dist
        python3 -m http.server -d dist 8080   (preview)
"""
import importlib, os, pkgutil, shutil, sys, json, datetime

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")
sys.path.insert(0, ROOT)

from src.layout import page, SITE_URL, DEMO, LOCAL_BUSINESS_SCHEMA


def write(path, html):
    out_dir = os.path.join(DIST, path.strip("/"))
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)


def main():
    if os.path.exists(DIST):
        shutil.rmtree(DIST)
    os.makedirs(DIST)
    shutil.copytree(os.path.join(ROOT, "assets"), os.path.join(DIST, "assets"))

    urls = []
    import src.pages as pages_pkg
    for m in sorted(pkgutil.iter_modules(pages_pkg.__path__)):
        mod = importlib.import_module(f"src.pages.{m.name}")
        if hasattr(mod, "build"):
            for path, html in mod.build():
                write(path, html)
                urls.append(path)
        else:
            html = page(mod.PATH, mod.TITLE, mod.DESCRIPTION, mod.body(), active=getattr(mod, "ACTIVE", None),
                        og_image=getattr(mod, "OG_IMAGE", "/assets/img/hero-patient.jpg"),
                        schema=LOCAL_BUSINESS_SCHEMA if mod.PATH == "/" else getattr(mod, "SCHEMA", None))
            write(mod.PATH, html)
            urls.append(mod.PATH)

    today = datetime.date.today().isoformat()
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in sorted(set(urls)):
        pri = "1.0" if u == "/" else ("0.5" if u.startswith("/blog/") and u != "/blog/" else "0.8")
        sm.append(f"  <url><loc>{SITE_URL}{u}</loc><lastmod>{today}</lastmod><priority>{pri}</priority></url>")
    sm.append("</urlset>")
    open(os.path.join(DIST, "sitemap.xml"), "w").write("\n".join(sm))
    # Redirects for old WordPress URLs (Netlify _redirects + Apache .htaccess)
    from src.pages.blog import POSTS, OLD_LINKS
    pairs = [(f"/{p['slug']}/", f"/blog/{p['slug']}/") for p in POSTS] + list(OLD_LINKS.items())
    pairs += [(f"/blog/page/{n}/", "/blog/") for n in range(8, 14)]
    open(os.path.join(DIST, "_redirects"), "w").write("\n".join(f"{a} {b.split('#')[0]} 301" for a, b in pairs) + "\n")
    ht = ["RewriteEngine On", "ErrorDocument 404 /404/index.html"]
    ht += [f"Redirect 301 {a} {b.split('#')[0]}" for a, b in pairs]
    open(os.path.join(DIST, ".htaccess"), "w").write("\n".join(ht) + "\n")
    robots = "User-agent: *\nDisallow: /\n" if DEMO else f"User-agent: *\nAllow: /\nSitemap: {SITE_URL}/sitemap.xml\n"
    open(os.path.join(DIST, "robots.txt"), "w").write(robots)
    # simple 404
    from src.layout import page as _p
    write("/404", _p("/404/", "Page not found", "The page you were looking for could not be found.",
                     '<section class="section"><div class="container center"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lead">The page you were looking for doesn’t exist or has moved.</p><a class="btn btn--primary" href="/">Back to Home</a></div></section>'))
    # GitHub Pages compatibility: root 404.html and disable Jekyll processing
    shutil.copyfile(os.path.join(DIST, "404", "index.html"), os.path.join(DIST, "404.html"))
    open(os.path.join(DIST, ".nojekyll"), "w").write("")
    if os.path.exists(os.path.join(ROOT, "CNAME")):
        shutil.copyfile(os.path.join(ROOT, "CNAME"), os.path.join(DIST, "CNAME"))
    # Standalone static sites (demos for other clients) live in sites/<name>/ and are
    # published as-is at /<name>/. Nothing in them is processed.
    sites_dir = os.path.join(ROOT, "sites")
    if os.path.isdir(sites_dir):
        for name in sorted(os.listdir(sites_dir)):
            src = os.path.join(sites_dir, name)
            if os.path.isdir(src) and not name.startswith("."):
                shutil.copytree(src, os.path.join(DIST, name))
                print(f"Copied standalone site sites/{name} -> /{name}/")
    print(f"Built {len(urls)} pages -> {DIST}")


if __name__ == "__main__":
    main()
