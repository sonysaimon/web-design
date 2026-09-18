#!/usr/bin/env python3
"""Assemble the site for GitHub Pages.

  home/            -> dist/              (the personal page at web.soichirosaimon.com)
  sites/<name>/    -> dist/<name>/       (standalone client sites, published as-is)

Usage: python3 build.py   then   python3 -m http.server -d dist 8080
"""
import os, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")

def main():
    if os.path.exists(DIST):
        shutil.rmtree(DIST)
    shutil.copytree(os.path.join(ROOT, "home"), DIST)
    sites = os.path.join(ROOT, "sites")
    if os.path.isdir(sites):
        for name in sorted(os.listdir(sites)):
            src = os.path.join(sites, name)
            if os.path.isdir(src) and not name.startswith("."):
                shutil.copytree(src, os.path.join(DIST, name))
                print(f"sites/{name} -> /{name}/")
    open(os.path.join(DIST, ".nojekyll"), "w").write("")
    if os.path.exists(os.path.join(ROOT, "CNAME")):
        shutil.copyfile(os.path.join(ROOT, "CNAME"), os.path.join(DIST, "CNAME"))
    print("built ->", DIST)

if __name__ == "__main__":
    main()
